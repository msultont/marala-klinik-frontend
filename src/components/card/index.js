import React from "react";
import { Card } from "antd";

const CardComponent = ({label, value}) => {
  return (
    <Card bordered={false} hoverable={true} className="pt-15 pb-15">
      <div className="mb-5 fs-19">{label || "-"}</div>
      <h3>{value || "-"}</h3>
    </Card>
  );
};

export default CardComponent;
