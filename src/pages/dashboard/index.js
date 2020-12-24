import React, { useState } from "react";
import { useCookies } from "react-cookie";

import { Cookies } from "../../config/cookies";
import MainLayout from "../../components/layouts/main-layout";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import UnsupportedMediaPage from "../../pages/unsupported-media";


const Dashboard = ({children}) => {
  const [cookies, removeCookies] = useCookies();
  const [queues, setQueues] = useState([]);

  const LOGOUT = () => {
    Object.keys(Cookies).forEach(async key => {
      await removeCookies(Cookies[key], null);
    });
    console.log(cookies);
  };

  const contentStyle = {
    height: "350px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
  };

  const menuLists = ["Antrian", "Bantuan"];

  // const NEXT_BUTTON = (
  //   <Button className="w-100" htmlType="button" type="primary" onClick={NEXT}>
  //     Next
  //   </Button>
  // );

  // *Methods

  // *End of Methods

  return (
    <MainLayout>
      { window.screen.width <= 575 ? <UnsupportedMediaPage /> : <DashboardLayout menuLists={menuLists}>{children}</DashboardLayout> }
    </MainLayout>
  );
};

export default Dashboard;
