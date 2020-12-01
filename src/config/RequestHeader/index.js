export const RequestHeader = {
  url: process.env.REACT_APP_API_URL_DEV,
  config: (ACCEPT = "", CONTENT_TYPE = "", { MK_accessToken, MK_tokenType } = {}) => {
    let params = {
      headers: {
        Accept: ACCEPT || "application/json",
        "Content-Type": CONTENT_TYPE || "application/json",
        Authentication: `${MK_tokenType || "Bearer"} ${
          typeof document === "undefined" ? "" : MK_accessToken
        }`
      }
    };
    // console.log(params);
    return params;
  }
};
