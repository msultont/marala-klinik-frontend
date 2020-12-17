import React from "react";
import { Layout } from "antd";

import HeaderLayout from "./header-layout";
import FooterLayout from "./footer-layout";
import MaralaBrand from "../brand";
import { GetCurrentYear } from "../../utils/date";

const { Content } = Layout;

const MainLayout = ({children}) => (
  <Layout className="main-layout vh-100">
    <HeaderLayout>
      <MaralaBrand logoWidth={50}/>
    </HeaderLayout>
    <Content className="overflow">{children}</Content>
    <FooterLayout>&copy; {GetCurrentYear} MARALA All Rights Reserved</FooterLayout>
  </Layout>
);
 
export default MainLayout;