import React, { useState } from "react";
import Confirmation from "./confirmation";
import FormRegister from "./form-register";
import FormPatient from "./form-patient";
import MainLayout from "../../components/layouts/main-layout";
import { PatientAPI, QueueAPI } from "../../api";
import { showErrorMessage } from "../../utils/error";

const PatientRegister = () => {
  const [form, setForm] = useState();
  const [formHidden, setFormHidden] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [submitLoading, setSubmitLoading] = useState();

  // *Methods

  const formSubmit = values => {
    setSubmitLoading(true);
    if (form) {
      // Form Register for New Patient
      PatientAPI.register(values)
        .then(({ status, data }) => {
          if (status === 200) {
            const patientId = data._id
            const queuePayload = {
              patientId : data._id,
              fullName : data.fullName
            }
            QueueAPI.addQueue(queuePayload)
              .then(({ status, data }) => {
                if (status === 200) {
                  const queueNumber = data.queue;
                  alert(`
                        Registrasi Anda berhasil! 
                        Harap simpan ID Pasien Anda!
                        =============================
                        ID Pasien Anda : ${patientId}
                        Nomor Antrian Anda : ${queueNumber}
                        `);
                  window.location.reload();
                  setSubmitLoading(false);
                }
              })
              .catch(err => {
                setSubmitLoading(false);
                showErrorMessage("Terjadi error pada sistem antrian");
              });
          }
        })
        .catch(err => {
          setSubmitLoading(false);
          showErrorMessage("Data pasien sudah terdaftar");
        });
    } else {
      // Form Register for Old Patient
      PatientAPI.getPatient(values)
        .then(({ status, data }) => {
          if (status === 200) {
            const patientName = data.fullName;
            const patientId = data._id;
            const queuePayload = {
              patientId : patientId,
              fullName : patientName
            }
            QueueAPI.addQueue(queuePayload)
              .then(({ status, data }) => {
                if (status === 200) {
                  const queueNumber = data.queue;
                  alert(`
                        Selamat datang ${patientName}!
                        =============================
                        ID pasien Anda adalah ${patientId}
                        Nomor Antrian Anda : ${queueNumber}
                      `);
                  window.location.reload();
                }
              })
              .catch(err => {
                setSubmitLoading(false);
                showErrorMessage("Terjadi error pada sistem antrian");
              });
          }
        })
        .catch(err => {
          setSubmitLoading(false);
          showErrorMessage("Data pasien tidak ditemukan");
        });
    }
  };

  const pageConfirmation = props => {
    props.target.outerText === "Sudah" ? setForm(false) : setForm(true);
    setConfirmation(true);
    setFormHidden(false);
  };

  // *End of Methods

  const formProps = {
    submitLoading,
    formSubmit,
    formHidden
  };

  return (
    <MainLayout>
      <div className="flex mobile-register flex-column no-center flex-align-center" style={{ transform: "translateY(7vh)" }}>
        <Confirmation hidden={confirmation} option={pageConfirmation} />
        {form ? <FormRegister {...formProps} /> : <FormPatient {...formProps} />}
      </div>
    </MainLayout>
  );
};

export default PatientRegister;
