import { EndPoint } from "@/types/index";
const authEndpoint: EndPoint = {
  currentUser: {
    uri: "/me",
    method: "GET",
    version: "",
  },
  loginUser: {
    uri: "/login",
    method: "POST",
    version: "",
  },
  acceptInvitation: {
    uri: "/accept-invitation",
    method: "POST",
    version: "",
  },
  logout: {
    uri: "/logout",
    method: "GET",
    version: "",
  },
};
export default authEndpoint;
