import axios from "axios";

const Queues = ({ url, config }) => {
  const endpoint = "/queue";
  return {
    getAllQueuesDB: ({ cookies }) => axios.get(`${url}${endpoint}/db/`, config("", "", cookies)),
    updateQueuesDB: ({ cookies, data }) => axios.patch(`${url}${endpoint}/db/update`, data, config("application/json", "", cookies)),
    getAllQueues: () => axios.get(`${url}${endpoint}/`),
    getCurrentQueue: () => axios.get(`${url}${endpoint}/current`),
    addQueue: () => axios.post(`${url}${endpoint}/register`),
    nextQueue: () => axios.post(`${url}${endpoint}/next`),
    resetQueues: () => axios.post(`${url}${endpoint}/reset`)
  };
};

export default Queues;
