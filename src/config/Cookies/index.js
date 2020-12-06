const date = new Date();
date.setTime(date.getTime() + 1 * 3600 * 1000);

export const Cookies = {
  TOKEN: "MK_accessToken",
  TOKEN_TYPE: "MK_tokenType",
  USERNAME: "MK_userName",
  USERROLE: "MK_userRole",
  OPTIONS: {
    path: "/",
    // expires: date
  }
};
