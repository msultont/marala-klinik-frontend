import React from "react";
import { Col, Layout, Row } from "antd";

const { Content } = Layout;

const LoginLayout = ({ children }) => (
  <Layout className="no-overflow vh-100">
    <Content className="vector-image h-100 w-100">
      <Row>
        <Col className="vector-image__img-1 vh-100" span={12} />
        <Col className="vector-image__img-2" span={12} />
      </Row>
    </Content>
    <Content className="flex flex-column main-content flex-align-center flex-justify-center">{children}</Content>
  </Layout>
);
export default LoginLayout;
