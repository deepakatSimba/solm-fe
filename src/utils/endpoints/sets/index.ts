import { EndPoint } from "@/types/index";

const setsEndpoints: EndPoint = {
  addSet: {
    uri: "/set",
    method: "POST",
    version: "",
  },
  getAllSets: {
    uri: "/set",
    method: "GET",
    version: "",
  },
  updateSet: {
    uri: "/set/:setId",
    method: "PUT",
    version: "",
  },
  deleteSet: {
    uri: "/set/:setId",
    method: "DELETE",
    version: "",
  },
};
export default setsEndpoints;
