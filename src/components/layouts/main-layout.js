import React from "react";
import { Layout } from "antd";

import MaralaBrand from "../brand";
import { GetCurrentYear } from "../../utils/date";

const { Content, Footer, Header } = Layout;

const MainLayout = ({children}) => (
  <Layout className="main-layout vh-100">
    <Header className="header-layout flex flex-justify-center">
      <MaralaBrand logoWidth={50}/>
    </Header>
    <Content style={{ overflow: "auto" }}>{children}</Content>
    <Footer className="footer-layout text-center">&copy; {GetCurrentYear} MARALA All Rights Reserved</Footer>
  </Layout>
);
 
export default MainLayout;