import dateFormat from "dateformat"; 

const date = new Date();

export const GetCurrentYear = date.getFullYear();

export const FormatDate = (date) => {
  return dateFormat(date, "d mmmm yyyy")
}