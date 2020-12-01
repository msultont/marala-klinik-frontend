import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Avatar, Button, Col, Dropdown, Image, Layout, Menu, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/logo_marala_1.png";

const { Content, Footer, Header, Sider } = Layout;

const AdminDashboard = () => {
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
        <Sider className="admin-dashboard__sider">
          {SIDE_MENU}
        </Sider>
        <Layout>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
