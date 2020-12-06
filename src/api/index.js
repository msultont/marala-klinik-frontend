import Axios from "axios";

import { RequestHeader as Params } from "../config/RequestHeader";
import Auth from "./Auth";
import Queue from "./Queue";

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
