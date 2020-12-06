import axios from "axios";

const Auth = ({ url }) => {
  const endpoint = "/queue";
  return {
    getAllQueues: () => axios.get(`${url}${endpoint}/`),
    getCurrentQueue: () => axios.get(`${url}${endpoint}/current`),
    addQueue: () => axios.post(`${url}${endpoint}/register`),
    nextQueue: () => axios.post(`${url}${endpoint}/next`),
    resetQueues: () => axios.post(`${url}${endpoint}/reset`)
  };
};

export default Auth;
