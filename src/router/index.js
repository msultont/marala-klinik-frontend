import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
import PageLogin from "../pages/Login";
import PagePatientDashboard from "../pages/PatientDashboard";
import Page404 from "../pages/404";
import PageAdminDashboard from "../pages/AdminDashboard";

const AppRouter = () => {
  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={PagePatientDashboard} />
          <Route exact path="/register" component={PagePatientDashboard} />
          <Route exact path="/login" component={PageLogin} />
          <PrivateRouter exact path="/admin-dashboard" component={PageAdminDashboard} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
};

export default AppRouter;
