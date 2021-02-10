import React from 'react'
import Form from "../../components/form";
 
const FormPatient = ({ error, formSubmit, formHidden, submitLoading }) => {
  const patientIdItem = {
    itemType: "textfield",
    label: "ID Pasien",
    name: "patientId",
    rules: {
      required: true,
      message: "Kolom ID pasien tidak boleh kosong!"
    }
  };

  const birthPlaceItem = {
    itemType: "textfield",
    label: "Tempat Lahir",
    name: "birthPlace",
    rules: {
      required: true,
      message: "Kolom tempat lahir tidak boleh kosong!"
    }
  };

  const clinicTypeItem = {
    itemType: "dropdown",
    label: "Klinik Yang Dikunjungi",
    name: "clinicType",
    rules: {
      required: true,
      message: "Silahkan dipilih klinik yang ingin Anda kunjungi!"
    },
    dropdownOptions: ["Praktek Dokter Umum", "Praktek Dokter Gigi", "Praktek Dokter Bedah", "Praktek Dokter Psikolog"]
  };

  const formItems = [patientIdItem, birthPlaceItem, clinicTypeItem] 

  return (
  <div hidden={formHidden}>
      <span className="fs-25 logo-text" style={{ padding: "50px" }}>
        Registrasi Pasien Lama
      </span>
      <Form loading={submitLoading} onFinish={formSubmit} formItems={formItems} formButton="Register" />
  </div>

  )
};
 
export default FormPatient;