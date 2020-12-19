import React, { useEffect, useState, useRef } from "react";

import MainLayout from "../../components/layouts/main-layout";
import Carousel from "../../components/carousel";
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
          setCurrentQueue(res.data.currentQueue);
          carouselGoTo(res.data.currentQueue);
          console.log(currentQueue)
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
      <Carousel data={queues} identifier={currentQueue} ref={carouselRef} />
    </MainLayout>
  );
};

export default PatientQueue;
