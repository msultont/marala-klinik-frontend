import React, { useState } from "react";

import Form from "../../components/form";
import MainLayout from "../../components/layouts/main-layout";
import { PatientAPI, QueueAPI } from "../../api";

const PatientRegister = () => {
  const [submitLoading, setSubmitLoading] = useState();
  const [error, setError] = useState(false);

  const fullnameItem = {
    itemType: "textfield",
    label: "Nama Lengkap",
    name: "fullName",
    rules: {
      required: true,
      message: "Kolom nama lengkap tidak boleh kosong!"
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

  const dateOfBirthItem = {
    itemType: "datepicker",
    label: "Tanggal Lahir",
    name: "dateOfBirth",
    rules: {
      required: true,
      message: "Kolom tanggal lahir tidak boleh kosong!"
    }
  };

  const currentAddressItem = {
    itemType: "textfield",
    label: "Alamat Tempat Tinggal",
    name: "currentAddress",
    rules: {
      required: true,
      message: "Kolom alamat tidak boleh kosong!"
    }
  };

  const sexItem = {
    itemType: "dropdown",
    label: "Jenis Kelamin",
    name: "sex",
    rules: {
      required: true,
      message: "Silahkan dipilih jenis kelamin Anda!"
    },
    dropdownOptions: ["Pria", "Wanita"]
  };

  const occupationItem = {
    itemType: "dropdown",
    label: "Pekerjaan",
    name: "occupation",
    rules: {
      required: true,
      message: "Silahkan dipilih pekerjaan Anda!"
    },
    dropdownOptions: ["Pengusaha", "PNS", "Karyawan Swasta", "Freelancer", "Pedagang"]
  };

  const formItems = [fullnameItem, birthPlaceItem, dateOfBirthItem, currentAddressItem, sexItem, occupationItem];

  const formSubmit = values => {
    setSubmitLoading(true);
    setError(false);
    console.log(values);
    PatientAPI.register(values)
      .then(({ status, data }) => {
        if (status === 200) {
          QueueAPI.addQueue()
            .then(({ status, data }) => {
              if (status === 200) {
                alert(`Registrasi Anda berhasil! Nomor Antrian Anda ${data.queue}`);
                window.location.reload();
              }
            })
            .catch(err => {
              console.error(err);
              setSubmitLoading(false);
              setError(true);
            });
        }
      })
      .catch(err => {
        console.error(err);
        setSubmitLoading(false);
        setError(true);
      });
  };

  return (
    <MainLayout>
      <div className="flex flex-column no-center flex-align-center" style={{ transform: "translateY(7vh)" }}>
        <span className="fs-25 logo-text">Registrasi Pasien Baru</span>
        <Form error={error} loading={submitLoading} onFinish={formSubmit} formItems={formItems} formButton="Register" />
      </div>
    </MainLayout>
  );
};

export default PatientRegister;
