import React from "react";
import Form from "../../components/form";

const FormRegister = ({error, formItems, formSubmit, formHidden, submitLoading}) => (
  <div hidden={formHidden}>
    <span className="fs-25 logo-text" style={{padding: "50px"}}>Registrasi Pasien Baru</span>
    <Form error={error} loading={submitLoading} onFinish={formSubmit} formItems={formItems} formButton="Register" />
  </div>
);

export default FormRegister;
