import { Layout, Menu, Breadcrumb, Typography } from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import Link from "next/link";

const { Title } = Typography;
import { useRouter } from "next/router";
import Classes from "../../config/classes.json";

const courseMap = Classes.data.courses.map((course) => {
  return {
    courseCode: course.computed_listing_infos[0].course_code,
    title: course.title,
  };
});

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Title>{slug}</Title>
            <Menu.Item key="2" icon={<NotificationOutlined />}>
              Announcement
            </Menu.Item>
            <Menu.Item key="3" icon={<MessageOutlined />}>
              Chat
            </Menu.Item>
            <Menu.Item key="4">Find a Group</Menu.Item>
            <Menu.Item key="5">Join a group</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            In Development
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
