import React from "react";
import Form from "../../components/form";

const FormRegister = ({ error, formSubmit, formHidden, submitLoading }) => {
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

  const ageItem = {
    itemType: "textfield",
    label: "Usia",
    name: "age",
    rules: {
      required: true,
      message: "Kolom umur tidak boleh kosong!"
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
    dropdownOptions: ["Freelancer", "Karyawan Swasta", "Mahasiswa", "Pelajar", "Pengusaha", "Pegawai Negeri Sipil", "Pedagang"]
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

  const mobilePhoneItem = {
    itemType: "textfield",
    label: "No. HP / Whatsapp",
    name: "phoneNumber",
    rules: {
      required: true,
      message: "Kolom nomor hp / whatsapp tidak boleh kosong!"
    }
  };

  const formItems = [fullnameItem, birthPlaceItem, dateOfBirthItem, ageItem, currentAddressItem, sexItem, occupationItem, clinicTypeItem, mobilePhoneItem];

  return (
    <div hidden={formHidden}>
      <span className="fs-25 logo-text" style={{ padding: "50px" }}>
        Registrasi Pasien Baru
      </span>
      <Form error={error} loading={submitLoading} onFinish={formSubmit} formItems={formItems} formButton="Register" />
    </div>
  );
};

export default FormRegister;
