import React, { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { Button, Carousel, Image, Layout, Row } from "antd";

import Logo from "../../assets/images/logo_marala_1.png";

const d = new Date();
const { Content, Footer, Header } = Layout;

const PatientDashboard = () => {
  const [cookies, setCookies] = useCookies();
  const carousel = useRef();

  const carouselRef = ref => {
    carousel.current = ref;
  };

  const carouselChange = () => {
    carousel.current.next();
  };

  useEffect(() => {
    console.log(cookies);
  });

  return (
    <Layout className="patient-dashboard vh-100">
      <Header className="patient-dashboard__header flex flex-justify-center">
        <Row>
          <Image alt="marala-logo" preview={false} src={Logo} width={50} />
          <span className="logo-text">MARALA KLINIK</span>
        </Row>
      </Header>
      <Content>
        <Carousel dots={false} ref={carouselRef} swipe={false}>
          <div>
            <h3 className="carousel-content">
              <span style={{ fontSize: "400px", marginBottom: "200px" }}>
                1
              </span>
              <span style={{ marginBottom: "-100px" }}>NOMOR ANTRIAN</span>
            </h3>
          </div>
          <div>
            <h3 className="carousel-content">
              <span style={{ fontSize: "400px", marginBottom: "200px" }}>
                2
              </span>
              <span style={{ marginBottom: "-100px" }}>NOMOR ANTRIAN</span>
            </h3>
          </div>
          <div>
            <h3 className="carousel-content">
              <span style={{ fontSize: "400px", marginBottom: "200px" }}>
                3
              </span>
              <span style={{ marginBottom: "-100px" }}>NOMOR ANTRIAN</span>
            </h3>
          </div>
          <div>
            <h3 className="carousel-content">
              <span style={{ fontSize: "400px", marginBottom: "200px" }}>
                4
              </span>
              <span style={{ marginBottom: "-100px" }}>NOMOR ANTRIAN</span>
            </h3>
          </div>
        </Carousel>
      </Content>
      <Footer className="patient-dashboard__footer text-center">
        &copy; {d.getFullYear()} MARALA All Rights Reserved
      </Footer>
    </Layout>
  );
};

export default PatientDashboard;
