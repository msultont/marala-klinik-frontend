import React from "react";
import { useCookies } from "react-cookie";
import { Cookies } from "../../config/cookies";
import MainLayout from "../../components/layouts/main-layout";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import UnsupportedMediaPage from "../../pages/unsupported-media";

const Dashboard = ({ children }) => {
  const [, , removeCookie] = useCookies();

  const menuLists = [
    {name: "Antrian", href: "/dashboard/queue"},
    {name: "Pasien", href: "/dashboard/patients"} 
  ];

  // *Methods

  const logout = (e) => {
    console.log(e)
    e.preventDefault();
    Object.keys(Cookies).forEach(async key => {
      await removeCookie(Cookies[key], Cookies.OPTIONS);
    });
    window.location.replace("/login");
  };

  // *End of Methods

  return (
    <MainLayout>
      {window.screen.width <= 575 ? (
        <UnsupportedMediaPage />
      ) : (
        <DashboardLayout logout={logout} menuLists={menuLists}>
          {children}
        </DashboardLayout>
      )}
    </MainLayout>
  );
};

export default Dashboard;
