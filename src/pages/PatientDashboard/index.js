import React, { useEffect, useState, useRef } from "react";
import { Carousel, Image, Layout, Row } from "antd";

import Logo from "../../assets/images/logo_marala_1.png";
import { QueueAPI } from "../../api";

const date = new Date();
const { Content, Footer, Header } = Layout;

const PatientDashboard = () => {
  const [queues, setQueues] = useState([]);
  const [currentQueue, setCurrentQueue] = useState();
  const carousel = useRef();

  const carouselRef = ref => {
    carousel.current = ref;
  };

const carouselGoTo = (index) => {
  carousel.current.goTo(index, false);
}

  const carouselNext = () => {
    carousel.current.next();
  };

  useEffect(() => {
    QueueAPI.getAllQueues()
      .then(res => {
        console.log(res);
        setQueues(res.data.queues);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      QueueAPI.getCurrentQueue()
        .then(res => {
          console.log(res);
          if (currentQueue !== res.data.currentQueue) {
            carouselGoTo(res.data.currentQueue);
            setCurrentQueue(res.data.currentQueue);
          }
          console.log(currentQueue);
        })
        .catch(err => {
          console.error(err);
        });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentQueue]);

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
          {currentQueue !== 0 ? (
            queues.map((key, value) => {
              return (
                <div key={key}>
                  <h3 className="carousel-content">
                    <span style={{ fontSize: "400px", marginBottom: "200px" }}>
                      {currentQueue}
                    </span>
                    <span style={{ marginBottom: "-100px" }}>
                      NOMOR ANTRIAN
                    </span>
                  </h3>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </Carousel>
      </Content>
      <Footer className="patient-dashboard__footer text-center">
        &copy; {date.getFullYear()} MARALA All Rights Reserved
      </Footer>
    </Layout>
  );
};

export default PatientDashboard;
