import React from "react";
import { Button } from "antd";

const Confirmation = ({ hidden, option }) => (
  <div className="mobile-register-confirmation" hidden={hidden}>
    <h1>Apakah Anda sebelumnya sudah pernah berkunjung ke klinik MARALA?</h1>
    <div className="flex functional-buttons mt-30 flex-justify-space-evenly">
      <Button className="fs-19" style={{width: "250px"}} type="primary" onClick={option}>Sudah</Button>
      <Button className="fs-19" style={{width: "250px"}} type="primary" onClick={option}>Belum</Button>
    </div>
  </div>
);

export default Confirmation;
