import React, { useState } from "react";

import Confirmation from "./confirmation";
import FormRegister from "./form-register";
import FormPatient from "./form-patient";
import MainLayout from "../../components/layouts/main-layout";
import { PatientAPI, QueueAPI } from "../../api";

const PatientRegister = () => {
  const [form, setForm] = useState();
  const [formHidden, setFormHidden] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState(false);
  const [submitLoading, setSubmitLoading] = useState();

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
  
  // *Methods

  const formSubmit = values => {
    setSubmitLoading(true);
    setError(false);
    console.log(values);
    QueueAPI.addQueue()
      .then(({ status, data }) => {
        if (status === 200) {
          alert(`Registrasi Anda berhasil! Nomor Antrian Anda ${data.queue}`);
          PatientAPI.register(values)
            .then(({ status, data }) => {
              if (status === 200) {
                // window.location.reload();
                console.log(data)
                setSubmitLoading(false);
              }
            })
            .catch(err => {
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

  const pageConfirmation = props => {
    props.target.outerText === "Sudah" ? setForm(false) : setForm(true)
    setConfirmation(true);
    setFormHidden(false)
  }

  // *End of Methods

  const formRegister = {
    error,
    submitLoading,
    formItems,
    formSubmit,
    formHidden
  }

  return (
    <MainLayout>
      <div className="flex flex-column no-center flex-align-center" style={{ transform: "translateY(7vh)" }}>
        <Confirmation hidden={confirmation} option={pageConfirmation} />
        { form ? <FormRegister {...formRegister} /> : <FormPatient hidden={formHidden} /> }
      </div>
    </MainLayout>
  );
};

export default PatientRegister;
