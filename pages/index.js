import { Layout, Menu, Breadcrumb, Col, Row, Card, Avatar } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Classes from "../config/classes";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

export default function Home() {
  console.log(Classes);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>{`nav`}</Menu.Item>;
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Row>
          {Classes.map((classObj) => {
            return (
              <Col>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src={classObj.imgsrc} />}
                  actions={[<ArrowRightOutlined key="Right" />]}
                >
                  <Meta title={classObj.name} />
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
