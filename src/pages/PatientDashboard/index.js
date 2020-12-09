import React from "react";
import { useLocation } from "react-router-dom";
import { Image, Layout, Row } from "antd";

import PatientRegister from "./PatientRegister";
import PatientQueue from "./PatientQueue";
import Logo from "../../assets/images/logo_marala_1.png";

const date = new Date();
const { Content, Footer, Header } = Layout;

const PatientDashboard = () => {
  const { pathname } = useLocation();

  return (
    <Layout className="patient-dashboard vh-100">
      <Header className="patient-dashboard__header flex flex-justify-center">
        <Row>
          <Image alt="marala-logo" preview={false} src={Logo} width={50} />
          <span className="logo-text">MARALA KLINIK</span>
        </Row>
      </Header>
      <Content className="overflow">{pathname === "/" ? <PatientQueue /> : <PatientRegister />}</Content>
      <Footer className="patient-dashboard__footer text-center">&copy; {date.getFullYear()} MARALA All Rights Reserved</Footer>
    </Layout>
  );
};

export default PatientDashboard;
