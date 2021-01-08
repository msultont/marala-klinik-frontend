import { message } from "antd"

export const getErrorMessage = err => {
  let errorMessage = "Terjadi kesalahan ..."  
  if(err instanceof Error){
    let { response } = err
    if(typeof response == 'object'){
      if(response.hasOwnProperty('data')){
        let { data: { message } } = response
        errorMessage = message
      }
    }else{
      let { message } = err
      switch(message){
        case 'Network Error' : errorMessage = 'Mohon periksa koneksi internet anda'; break;
        default : errorMessage = message
      }
    }
  }else if(typeof err === 'string') errorMessage = err
  return errorMessage;
}

export const showErrorMessage = (err, top) => {
  // message.config({
  //   top: top === undefined ? 120 : top
  // })
  message.error(getErrorMessage(err))
}