import axios from "axios";

const Auth = ({ url, config }) => {
  const endpoint = "/auth";
  return {
    login: data => axios.post(`${url}${endpoint}/login`, data, config()),
    register: data => axios.post(`${url}${endpoint}/register`, data, config())
  };
};

export default Auth;
