import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Table } from "antd";
import TableColumns from "./patient-table-column";
import Dashboard from "../../dashboard";
import TableLayout from "../../../components/layouts/table-layout";
import { PatientAPI } from "../../../api";

const PatientsPage = props => {
  const [cookies] = useCookies();
  const [columns] = useState(TableColumns);
  const [dataSource, setDataSource] = useState([]);

  // *API Request/Payload
  const payload = {
    cookies
  }
  // *End of API Request/Payload

  // *Methods
  const getPatients = () => {
    PatientAPI.getPatients(payload)
      .then(({status, data}) => {
        if (status === 200) {
          setDataSource(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // *End of Methods

  useEffect(() => {
    getPatients()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pageProps = {
    title: "Informasi Pasien",
    // summaryCards: [
    //   {label: "Total Pasien", value: 20},
    //   {label: "Pasien Sembuh", value: 39},
    //   {label: "Pasien Aktif", value: 15}
    // ],
  }

  const tableProps = {
    dataSource,
    columns
  }

  return (
    <Dashboard>
      <TableLayout {...pageProps}>
        <Table {...tableProps} pagination={false} rowKey={record => record._id} />
      </TableLayout>
    </Dashboard>
  );
};

export default PatientsPage;
