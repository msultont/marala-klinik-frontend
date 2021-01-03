import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Card } from "antd";
import { QueueAPI } from "../../../api";
import Dashboard from "../../dashboard";

const QueuePage = props => {
  const [dailyQueues, setDailyQueues] = useState([]);
  const [currentQueue, setCurrentQueue] = useState();
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Antrian",
        fill: false,
        lineTension: 0.1,
        borderColor: "#0195d8",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#0195d8",
        pointBackgroundColor: "#0195d8",
        pointBorderWidth: 8,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  // *Methods
  const getDailyQueues = () => {
    QueueAPI.getAllQueues()
      .then(({ status, data }) => {
        if (status === 200) {
          setDailyQueues(data.queues.length);
        }
      })
      .catch(err => {
      });
  };
  const getCurrentQueue = () => {
    QueueAPI.getCurrentQueue()
      .then(({ status, data }) => {
        if (status === 200) {
          setCurrentQueue(data.currentQueue)
        }
      })
      .catch(err => {
      })
  };
  const nextQueue = () => {
    QueueAPI.nextQueue()
      .then(res => {
        console.log(res)
    }).catch(err => {
      alert(err)
    });
    getCurrentQueue();
  };
  // *End of Methods

  // *useEffect

  useEffect(() => {
    getDailyQueues();
    getCurrentQueue();
  }, []);

  // *End of useEffect

  return (
    <Dashboard>
      <div className="m-30">
        <div className="flex flex-justify-space-between">
          <h4 className="ml-30">Informasi Antrian</h4>
          <div className="mr-45">
            <Button className="mr-15" onClick type="primary">
              Reset Antrian
            </Button>
            <Button onClick={nextQueue} type="primary">
              Antrian Selanjutnya
            </Button>
          </div>
        </div>
        <div className="summary-cards p-30">
          <Card bordered={false} hoverable={true} className="pt-15 pb-15 mr-15">
            <div className="mb-5">Total Antrian</div>
            <h3>22</h3>
          </Card>
          <Card bordered={false} hoverable={true} className="pt-15 pb-15 mr-15">
            <div className="mb-5">Total Antrian Hari Ini</div>
            <h3>{dailyQueues}</h3>
          </Card>
          <Card bordered={false} hoverable={true} className="pt-15 pb-15 mr-15">
            <div className="mb-5">Urutan Antrian</div>
            <h3>{currentQueue}</h3>
          </Card>
        </div>
        dropdown
        <Line data={data} width={500} />
      </div>
    </Dashboard>
  );
};

export default QueuePage;
