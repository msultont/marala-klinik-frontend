import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Card, Col, Row } from "antd";
import { QueueAPI } from "../../../api";
import Dashboard from "../../dashboard";

const QueuePage = props => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset of Months",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const NEXT = () => {
    QueueAPI.nextQueue();
  };

  useEffect(() => {
    QueueAPI.getAllQueues()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <Dashboard>
      <div className="m-30">
        <h4 className="ml-30">Informasi Antrian</h4>
        <div className="summary-cards p-30">
          <Card bordered={false} hoverable={true} className="pt-15 pb-15 mr-15">
            <div className="mb-5">Jumlah Antrian</div>
            <h3>Icon 1</h3>
          </Card>
          <Card bordered={false} hoverable={true} className="pt-15 pb-15 mr-15">
            <div className="mb-5">Jumlah Antrian</div>
            <h3>Icon 1</h3>
          </Card>
          <Card bordered={false} hoverable={true} className="pt-15 pb-15">
            <div className="mb-5">Jumlah Antrian</div>
            <h3>Icon 1</h3>
          </Card>
        </div>
        <Row>
          <Line data={data} width={500} />
        </Row>
      </div>
    </Dashboard>
  );
};

export default QueuePage;
