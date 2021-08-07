import request from "../util/request";

const getVoiceList = (params) =>
  request.get("/voice/list", {
    params,
  });

export { getVoiceList };
