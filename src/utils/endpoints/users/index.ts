import { EndPoint } from "@/types/index";

const usersEndpoints: EndPoint = {
  getAllUsers: {
    uri: "/users",
    method: "GET",
    version: "",
  },
  getSingleUser: {
    uri: "/users/:userId",
    method: "GET",
    version: "",
  },
  updateUser:{
    uri:"/users/:userId",
    method:"PUT",
    version:""
  }
};
export default usersEndpoints;
  