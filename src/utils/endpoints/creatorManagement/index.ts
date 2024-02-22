import { EndPoint } from "@/types/index";

const creatorManagementEndPoints: EndPoint = {
  inviteCreator: {
    uri: "/creator",
    method: "POST",
    version: "",
  },
  getAllCreator: {
    uri: "/creator",
    method: "GET",
    version: "",
  },
  getSingleCreator: {
    uri: "/creator/:creatorId",
    method: "GET",
    version: "",
  },
};
export default creatorManagementEndPoints;
