import { FormatDate } from '../../../utils/date';

const PatientTableColumn = [
  {
    title: "ID Pasien",
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: "Nama Lengkap",
    dataIndex: 'fullName',
    key: 'fullName',
    render: fullName => fullName
  },
  {
    title: "Tempat Lahir",
    dataIndex: 'birthPlace',
    key: 'birthPlace',
  },
  {
    title: "Tanggal Lahir",
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
    render: (record) => {
      console.log(record)
      return (
        <>{FormatDate(record)}</>
      )
    }
  },
  {
    title: 'Usia',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Alamat Tempat Tinggal',
    dataIndex: 'currentAddress',
    key: 'currentAddress',
  },
  {
    title: 'Jenis Kelamin',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Pekerjaan',
    dataIndex: 'occupation',
    key: 'occupation',
  },
  {
    title: 'No. HP / Whatsapp',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  }
]

export default PatientTableColumn;