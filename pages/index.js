import { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Col, Row, Card, Button, Select } from "antd";
import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Classes from "../config/classes.json";

const courseMap = Classes.data.courses.map((course) => {
  return {
    courseCode: course.computed_listing_infos[0].course_code,
    title: course.title,
  };
});
console.log(courseMap);

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const { Option } = Select;

export default function Home() {
  const [myCourses, changeMyCourses] = useState(null);

  if (typeof window !== "undefined" && myCourses == null) {
    const rawCourses = window.localStorage.getItem("myCourses");
    changeMyCourses(rawCourses);
    if (myCourses == null) window.localStorage.setItem("myCourses", "");
  }

  const [courseAddInput, changeCourseAddInput] = useState("");
  const onCourseChange = (input) => {
    changeCourseAddInput(input);
  };

  const onCourseAdd = () => {
    const courses = myCourses + "," + courseAddInput;
    if (myCourses.includes(courseAddInput)) return;
    changeMyCourses(courses);
    window.localStorage.setItem("myCourses", courses);
  };
  console.log(courseAddInput);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>{`nav`}</Menu.Item>;
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Row style={{ margin: "20px" }} align="middle">
          <Col>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a course"
              optionFilterProp="children"
              onChange={onCourseChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {courseMap.map((course) => {
                return (
                  <Option value={course.courseCode}>{course.courseCode}</Option>
                );
              })}
            </Select>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              size="large"
              onClick={onCourseAdd}
            >
              Add new course
            </Button>
          </Col>
        </Row>
        <Row>
          {myCourses
            ?.split(",")
            .filter((st) => st !== "")
            .map((classString) => {
              return (
                <Col style={{ margin: "30px" }}>
                  <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" />}
                    actions={[<ArrowRightOutlined key="Right" />]}
                  >
                    <Meta
                      title={classString}
                      description={
                        courseMap.find(
                          (course) => course.courseCode == classString
                        ).title
                      }
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
