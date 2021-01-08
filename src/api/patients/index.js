import Axios from "axios";

const Patients = ({ url, config }) => {
  const endpoint = "/patients";
  return {
    getPatients: ({ cookies }) => Axios.get(`${url}${endpoint}/`, config("", "", cookies)),
    getPatient: params => Axios.get(`${url}${endpoint}/patient`, { 
      params: params, ...config("application/json", "", "")}
    ),
    register: data => Axios.post(`${url}${endpoint}/register`, data, config())
  };
};

export default Patients;
