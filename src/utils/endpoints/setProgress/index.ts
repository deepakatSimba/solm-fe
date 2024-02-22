import { EndPoint } from "@/types/index";

const setProgressEndpoints: EndPoint = {
  addSetProgress: {
    uri: "/setProgress",
    method: "POST",
    version: "",
  },
  getSetProgress: {
    uri: "/setProgress",
    method: "GET",
    version: "",
  },
  updateSetProgress: {
    uri: "/setProgress/:setId",
    method: "PUT",
    version: "",
  },
  deleteSetProgress: {
    uri: "/setProgress/:setId",
    method: "DELETE",
    version: "",
  },
};
export default setProgressEndpoints;
