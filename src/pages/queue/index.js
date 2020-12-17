import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "antd";

import MainLayout from "../../components/layouts/main-layout";
import Form from "../../components/form";
import { QueueAPI } from "../../api";

const PatientQueue = () => {
  const [queues, setQueues] = useState([]);
  const [currentQueue, setCurrentQueue] = useState();
  const carousel = useRef();

  const carouselRef = ref => {
    carousel.current = ref;
  };
  const carouselGoTo = index => {
    carousel.current.goTo(index, false);
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
    <MainLayout>
      <Carousel dots={false} ref={carouselRef} swipe={false}>
        {currentQueue !== 0 ? (
          queues.map((key, value) => {
            return (
              <div key={key}>
                <h3 className="carousel-content">
                  <span style={{ fontSize: "400px", marginBottom: "200px" }}>{currentQueue}</span>
                  <span style={{ marginBottom: "-100px" }}>NOMOR ANTRIAN</span>
                </h3>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </Carousel>
    </MainLayout>
  );
};

export default PatientQueue;
