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
  },
  {
    title: "Klinik yang Dikunjungi",
    dataIndex: 'clinicType',
    key: 'clinicType',
  },
]

export default QueueTableColumn;