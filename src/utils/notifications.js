import { notification } from "antd"
import { getErrorMessage } from "./error";

export const showNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
}

export const showErrorNotification = (err) => {
  showNotification('error', 'Terjadi Kesalahan', getErrorMessage(err))
}

export const showSuccessNotification = (message) => {
  showNotification('success', 'Berhasil', message)
}