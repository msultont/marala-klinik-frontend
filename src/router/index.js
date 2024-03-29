import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageLogin from "../pages/login";
import Page404 from "../pages/404";
import PageQueue from "../pages/queue";
import PageRegister from "../pages/register";
import PageAdminQueue from "../pages/dashboard/queue";
import PageAdminPatients from "../pages/dashboard/patients";
import PrivateRouter from "./private-router";

const AppRouter = () => {
  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={PageQueue} />
          <Route exact path="/register" component={PageRegister} />
          <Route exact path="/login" component={PageLogin} />
          <PrivateRouter exact path="/dashboard/queue" component={PageAdminQueue} />
          <PrivateRouter exact path="/dashboard/patients" component={PageAdminPatients} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
};

export default AppRouter;
