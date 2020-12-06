import React, { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import {
  Avatar,
  Button,
  Card,
  Carousel,
  Col,
  Dropdown,
  Image,
  Layout,
  Menu,
  Row
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";

import Logo from "../../assets/images/logo_marala_1.png";
import { QueueAPI } from "../../api";

const date = new Date();
const { Content, Footer, Header, Sider } = Layout;

const AdminDashboard = () => {
  const [queues, setQueues] = useState([]);

  const NEXT = () => {
    QueueAPI.nextQueue();
  };

  const contentStyle = {
    height: "350px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
  };

  const AVATAR_MENU = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  const SIDE_MENU = (
    <Menu className="sider__menu" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1">Home</Menu.Item>
    </Menu>
  );

  const NEXT_BUTTON = (
    <Button className="w-100" htmlType="button" type="primary" onClick={NEXT}>
      Next
    </Button>
  );

  useEffect(() => {
    QueueAPI.getAllQueues()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Layout className="vh-100">
      <Header className="admin-dashboard__header">
        <Row className="header-content">
          <Col>
            <Image alt="marala-logo" preview={false} src={Logo} width={50} />
            <span className="logo-text">MARALA KLINIK</span>
          </Col>
          <Col>
            <Dropdown
              arrow
              overlay={AVATAR_MENU}
              placement="bottomCenter"
              trigger={["click"]}
            >
              <Avatar
                className="header-content__avatar"
                icon={<UserOutlined />}
                size={50}
              />
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider className="admin-dashboard__sider">{SIDE_MENU}</Sider>
        <Layout>
          <Content>
            <Row className="h-50">
              <Col span={8}>
                <Card
                  actions={[NEXT_BUTTON]}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    width: "100%"
                  }}
                >
                  <Carousel dots={false} swipe={false}>
                    {queues.map((key, value) => {
                      return (
                        <div key={key}>
                          <h3 style={contentStyle}>{value + 1}</h3>
                        </div>
                      );
                    })}
                  </Carousel>
                </Card>
              </Col>
              <Col span={8}>Card 2</Col>
              <Col span={8}>Card 3</Col>
            </Row>
            <Row className="h-50">
              <Col span={8}>Card 1</Col>
              <Col span={8}>Card 2</Col>
              <Col span={8}>Card 3</Col>
            </Row>
          </Content>
          <Footer className="text-center">
            &copy; {date.getFullYear()} MARALA All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
