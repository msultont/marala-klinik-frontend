import React from "react";
import { Result } from "antd";
import Dashboard from "../dashboard";

const PageNotFound = () => {
  return (
    <Dashboard>
      <Result status="404" title="Halaman tidak ditemukan!" subTitle="Coming soon!" />
    </Dashboard>
  );
};

export default PageNotFound;
