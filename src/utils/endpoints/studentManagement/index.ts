import { EndPoint } from "@/types/index";

const studentManagementEndPoints: EndPoint = {
  inviteStudent: {
    uri: "/student",
    method: "POST",
    version: "",
  },
  getAllStudent: {
    uri: "/student",
    method: "GET",
    version: "",
  },
  getSingleStudent: {
    uri: "/student/:id",
    method: "GET",
    version: "",
  },
  updateStudent: {
    uri: "/student/:id",
    method: "PUT",
    version: "",
  },
};
export default studentManagementEndPoints;
