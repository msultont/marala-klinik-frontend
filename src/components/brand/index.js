import React from "react";
import { Image, Row } from "antd";

import Logo from "../../assets/images/logo_marala_1.png";

const Brand = ({ width }) => (
  <Row className="flex flex-align-center" id="marala-brand">
    <Image alt="marala-logo" preview={false} src={Logo} width={width || undefined} />
    <span className="fs-25 logo-text">MARALA KLINIK</span>
  </Row>
);

export default Brand;
