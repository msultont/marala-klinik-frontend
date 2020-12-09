import Axios from "axios";

const Patient = ({url, config}) => {
  const endpoint = "/patient";
  return {
    register: data => Axios.post(`${url}${endpoint}/register`, data, config())
  };
};

export default Patient;
