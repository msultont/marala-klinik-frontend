import React from "react";

import { Layout, Menu, Button } from "antd";

const { Content, Sider } = Layout;
const TableLayout = ({ children }) => (
  <Layout className="p-30">
    <Content>
      <div>TABLE CONTROL</div>
      {children}
    </Content>
  </Layout>
);

export default TableLayout;
