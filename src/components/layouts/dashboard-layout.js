import React from "react";

import { Anchor, Layout, Menu, Button } from "antd";

const { Content, Sider } = Layout;

const DashboardLayout = ({ children, menuLists }) => {
  return (
    <Layout className="h-100">
      <Sider className="dashboard__sider">
        <Menu className="sider__menu text-center" defaultSelectedKeys={["0"]} theme="light">
          {menuLists.map((list, key) => (<Menu.Item key={key}>{list}</Menu.Item>))}
        </Menu>
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
