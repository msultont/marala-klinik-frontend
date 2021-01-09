import React, { useEffect, useState, useRef } from "react";

import MainLayout from "../../components/layouts/main-layout";
import Carousel from "../../components/carousel";
import { QueueAPI } from "../../api";
import { showWarningNotification } from "../../utils/notifications";

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
      .then(({status, data}) => {
        if (status === 200) setQueues(data.queues);
      })
      .catch((err) => {
        console.error(err)
      })
    const warning = setTimeout(() => {
      showWarningNotification("Nomor antrian tidak muncul? Silahkan muat ulang halaman browser")
    }, 10000);
    return () => clearTimeout(warning)
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      QueueAPI.getCurrentQueue()
        .then(res => {
          setCurrentQueue(res.data.currentQueue);
          carouselGoTo(res.data.currentQueue);
        })
        .catch(error => {
          console.error(error)
        });
    }, 5000);
    return () => clearInterval(interval);
    ;
  }, [currentQueue]);

  return (
    <MainLayout>
      <Carousel data={queues} identifier={currentQueue} ref={carouselRef} />
    </MainLayout>
  );
};

export default PatientQueue;
