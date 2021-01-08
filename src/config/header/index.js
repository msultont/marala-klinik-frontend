export const RequestHeader = {
  url: process.env.REACT_APP_API_URL_DEV,
  config: (ACCEPT = "", CONTENT_TYPE = "", { MK_tokenType, MK_accessToken } = {}) => {
    let params = {
      headers: {
        Accept: ACCEPT || "application/json",
        "Content-Type": CONTENT_TYPE || "application/json",
        Authorization: `${MK_tokenType || "Bearer"} ${MK_accessToken || ""}`
      }
    };
    return params;
  }
};
