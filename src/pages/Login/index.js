import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Col, Image, Layout, Row } from "antd";

import Logo from "../../assets/images/logo_marala_1.png";
import Form from "../../components/Form";
import { AuthAPI } from "../../api";
import { Cookies } from "../../config/Cookies";

const { Content } = Layout;

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies([Cookies.TOKEN, Cookies.TOKEN_TYPE, Cookies.USERNAME, Cookies.USERROLE]);
  const [submitLoading, setSubmitLoading] = useState();
  const [error, setError] = useState(false);

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
    setError(false);
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
            window.location.replace("/admin-dashboard");
          }, 500);
        }
      })
      .catch(err => {
        console.error(err);
        setSubmitLoading(false);
        setError(true);
      });
  };

  return (
    <Layout className="no-overflow vh-100">
      <Content className="vector-image h-100 w-100">
        <Row>
          <Col className="vector-image__img-1 vh-100" span={12} />
          <Col className="vector-image__img-2" span={12} />
        </Row>
      </Content>
      <Content className="flex flex-column main-content flex-align-center flex-justify-center">
        <Row className="flex main-content__header flex-align-center">
          <Image alt="marala-logo" preview={false} src={Logo} />
          <span className="fs-25 logo-text">MARALA KLINIK</span>
        </Row>
        <Row className="main-content__form">
          <Form error={error} loading={submitLoading} onFinish={formSubmit} formItems={formItems} formButton="Login"/>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
