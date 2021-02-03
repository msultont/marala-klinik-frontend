const QueueTableColumn = [
  {
    title: "ID Pasien",
    dataIndex: 'patientId',
    key: 'patientId',
  },
  {
    title: "Nama Lengkap Pasien",
    dataIndex: "fullName",
    key: "fullName"
  },
  {
    title: "Nomor Antrian",
    dataIndex: 'position',
    key: 'position',
    render: (record = "") => {
      const frontText = record.substr(0, record.length - 1)
      const backText = record.substr(record.length - 1)
      return (
        <>{frontText}<span style={{color: "red"}}>{backText}</span></>
      )
    }
  },
  {
    title: "Klinik yang Dikunjungi",
    dataIndex: 'clinicType',
    key: 'clinicType',
  },
]

export default QueueTableColumn;