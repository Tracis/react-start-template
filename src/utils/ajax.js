import ajax from "ajax";
import { showAlert } from "beehive";

function checkSucces(result) {
  if (result && result.res_code !== 1) {
    const errMessage = Array.isArray(result.res_msg)
      ? result.res_msg.join("<br/>")
      : typeof result.res_msg === "string"
      ? result.res_msg
      : "";
    throw new Error(errMessage);
  }
}

export default function(params) {
  return ajax && ajax({
    ...params,
    showAlert,
    checkSucces,
    alwaysShowErrorAlert: true,
    pathPrefix: "/api/v1/",
  });
}
