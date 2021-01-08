import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// import { Line } from "react-chartjs-2";
import { Table, Select } from "antd";
import TableColumns from "./queue-table-column";
import Dashboard from "../../dashboard";
import { QueueAPI } from "../../../api";
import TableLayout from "../../../components/layouts/table-layout";
import { showErrorMessage } from "../../../utils/error";
import { showErrorNotification, showSuccessNotification } from "../../../utils/notifications";

const { Option } = Select;

const QueuePage = props => {
  const [cookies] = useCookies();
  const [columns] = useState(TableColumns);
  const [dataSource, setDataSource] = useState([]);
  const [dailyQueues, setDailyQueues] = useState([]);
  const [currentQueue, setCurrentQueue] = useState();
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "Total Antrian",
  //       fill: false,
  //       lineTension: 0.1,
  //       borderColor: "#0195d8",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "#0195d8",
  //       pointBackgroundColor: "#0195d8",
  //       pointBorderWidth: 8,
  //       pointRadius: 2,
  //       pointHitRadius: 10,
  //       data: [65, 59, 80, 81, 56, 55, 40]
  //     }
  //   ]
  // };

  // *API Request/Payload
  const payload = {
    data: {},
    cookies
  }
  // *End of API Request/Payload

  // *Methods
  const getQueuesDB = () => {
    QueueAPI.getAllQueuesDB(payload)
      .then(({status, data}) => {
        if (status === 200) {
          setDataSource(data)
        }
      })
      .catch((err) => {
        showErrorMessage("Tidak dapat mengambil data antrian!")
      })
  };

  const getDailyQueues = () => {
    QueueAPI.getAllQueues()
      .then(({ status, data }) => {
        if (status === 200) {
          setDailyQueues(data.queues.length);
        }
      })
      .catch(err => {
      });
  };
  const getCurrentQueue = () => {
    QueueAPI.getCurrentQueue()
      .then(({ status, data }) => {
        if (status === 200) {
          setCurrentQueue(data.currentQueue)
        }
      })
      .catch(err => {
      })
  };
  const nextQueue = () => {
    QueueAPI.nextQueue()
      .then(({status}) => {
        if (status === 200) {

        }
    }).catch(err => {
      showErrorNotification("Tidak ada antrian berikutnya")
    });
    getCurrentQueue();
  };

  const resetQueue = () => {
    QueueAPI.resetQueues()
      .then(({status, data}) => {
        if (status === 200) {
          showSuccessNotification("Antrian berhasil direset")
        }
      })
  }

  const setPatientClinicType = (patientId, clinicType) => {
    payload.data = {clinicType: clinicType, patientId: patientId}
    QueueAPI.updateQueuesDB(payload)
      .then(({status}) => {
        if (status === 200) {
          getQueuesDB()
        }
      })
      .catch((err) => {
        showErrorMessage("Tidak dapat melakukan update pada tabel!")
      })
  };

  const patientClinicTypeOptions = () => {
    TableColumns[3] = {
      title: "Klinik yang Dikunjungi",
      dataIndex: 'clinicType',
      key: 'clinicType',
      render: (text, record, index) => {
        if (text === "") {
          return (
            <Select className="w-100" onSelect={(value) => setPatientClinicType(record.patientId, value)}>
              <Option value="Praktek Dokter Umum">Praktek Dokter Umum</Option>
              <Option value="Praktek Dokter Gigi">Praktek Dokter Gigi</Option>
              <Option value="Konsultasi Dokter Bedah">Konsultasi Dokter Bedah</Option>
              <Option value="Konsultasi Psikolog">Konsultasi Psikolog</Option>
            </Select>
          )
        }
        return text;
      }
    }
  }
  // *End of Methods

  // *useEffect

  useEffect(() => {
    getQueuesDB();
    getDailyQueues();
    getCurrentQueue();
    patientClinicTypeOptions();
  }, []);

  // *End of useEffect

  const pageProps = {
    title: "Informasi Antrian",
    summaryCards: [
      {label: "Total Antrian Bulan Ini", value: "-"},
      {label: "Total Antrian Hari Ini", value: dailyQueues},
      {label: "Urutan Antrian", value: currentQueue}
    ],
    buttons: [
      {
        label: "Reset Antrian",
        handleClick: resetQueue
      },
      {
        label: "Antrian Selanjutnya",
        handleClick: nextQueue
      }
    ],
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
      {/* <Line data={data} width={500} /> */}
    </Dashboard>
  );
};

export default QueuePage;
