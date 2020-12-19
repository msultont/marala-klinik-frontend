import React, { useState } from "react";
import { useCookies } from "react-cookie";

import MaralaBrand from "../../components/brand";
import Form from "../../components/form";
import LoginLayout from "../../components/layouts/login-layout";

import { AuthAPI } from "../../api";
import { Cookies } from "../../config/cookies";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [, setCookies] = useCookies([Cookies.TOKEN, Cookies.TOKEN_TYPE, Cookies.USERNAME, Cookies.USERROLE]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const usernameItem = {
    itemType: "textfield",
    label: "Username",
    name: "username",
    rules: {
      required: true,
      message: "Username cannot be empty!"
    }
  };

  const passwordItem = {
    itemType: "textfield",
    label: "Password",
    name: "password",
    rules: {
      required: true,
      message: "Password cannot be empty!"
    }
  };

  const formItems = [usernameItem, passwordItem];

  const formSubmit = values => {
    setSubmitLoading(true);
    setErrorLogin(false);
    AuthAPI.login(values)
      .then(({ status, data }) => {
        console.log(status);
        if (status === 200) {
          console.log(data);
          setCookies(Cookies.TOKEN, data.accessToken, Cookies.OPTIONS);
          setCookies(Cookies.TOKEN_TYPE, data.tokenType, Cookies.OPTIONS);
          setCookies(Cookies.USERNAME, data.user.username, Cookies.OPTIONS);
          setCookies(Cookies.USERROLE, data.user.role, Cookies.OPTIONS);
          setTimeout(() => {
            window.location.replace("/dashboard");
          }, 500);
        }
      })
      .catch(err => {
        console.error(err);
        setSubmitLoading(false);
        setErrorLogin(true);
      });
  };

  return (
    <LoginLayout>
      <MaralaBrand />
      <Form errorLogin={errorLogin} loading={submitLoading} onFinish={formSubmit} formItems={formItems} formButton="Login" />
    </LoginLayout>
  );
};

export default Login;
