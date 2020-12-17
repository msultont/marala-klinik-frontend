import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderLayout = ({ children }) => <Header className="patient-dashboard__header flex flex-justify-center">{children}</Header>;

export default HeaderLayout;
