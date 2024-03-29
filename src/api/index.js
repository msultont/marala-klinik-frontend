import Axios from "axios";

import { RequestHeader as Params } from "../config/header";
import Auth from "./auth";
import Patients from "./patients";
import Queue from "./queue";

// Axios Interceptor / Middleware
Axios.interceptors.response.use(
  response => response,
  err => {
    console.log(err);
  }
);

// Lists Exported API
export const AuthAPI = Auth(Params);
export const QueueAPI = Queue(Params);
export const PatientAPI = Patients(Params);
