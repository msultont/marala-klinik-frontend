import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

import { Layout, Menu, Button } from "antd";

const { Content, Sider } = Layout;

const DashboardLayout = ({ children, menuLists, logout }) => {
  const location = useLocation();
  return (
    <Layout className="h-100">
      <Sider className="dashboard__sider">
        <Menu className="mt-30 text-center" defaultSelectedKeys={[location.pathname]} theme="light">
          {menuLists.map((list,) => (
            <Menu.Item key={list.href}>
              <Link className="fs-19" to={list.href}>{list.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Button className="mb-30 fs-19" icon={<LogoutOutlined />} onClick={logout} type="primary">
          Keluar
        </Button>
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
