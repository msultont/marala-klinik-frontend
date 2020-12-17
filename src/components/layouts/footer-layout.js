import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterLayout = ({ children }) => <Footer className="footer-layout text-center">{children}</Footer>;

export default FooterLayout;
