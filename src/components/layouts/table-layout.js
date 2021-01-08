import React from "react";
import { Button, Layout } from "antd";
import Card from "../../components/card";

const { Content, Header } = Layout;

const TableLayout = ({ buttons = [], children, title, summaryCards = [] }) => (
  <Layout className="m-30 p-30">
    <Header className="flex flex-justify-space-between">
      <h4>{title}</h4>
      <div className="flex functional-buttons">
        {buttons.map((v, k) => (
          <Button key={k} onClick={v.handleClick} type="primary">{v.label}</Button>
        ))}
      </div>
    </Header>
    <div className="summary-cards">
      {summaryCards.map((v, k) => (
        <Card {...v} key={k} />
      ))}
    </div>
    <Content className="mt-45">
      {/* <div>TABLE CONTROL</div> */}
      {children}
    </Content>
  </Layout>
);

export default TableLayout;
