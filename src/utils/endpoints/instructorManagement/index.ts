import { EndPoint } from "@/types/index";

const instructorManagementEndPoints: EndPoint = {
  inviteInstructor: {
    uri: "/instructor",
    method: "POST",
    version: "",
  },
  getAllInstructor: {
    uri: "/instructor",
    method: "GET",
    version: "",
  },
  getSingleInstructor: {
    uri: "/instructor/:id",
    method: "GET",
    version: "",
  },
  updateInstructor: {
    uri: "/instructor/:id",
    method: "PUT",
    version: "",
  },
};
export default instructorManagementEndPoints;
