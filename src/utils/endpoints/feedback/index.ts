import { EndPoint } from "@/types/index";

const feedbackEndpoints: EndPoint = {
  addFeedback: {
    uri: "/feedback",
    method: "POST",
    version: "",
  },
  getFeedback: {
    uri: "/feedback",
    method: "GET",
    version: "",
  },
  getSingleFeedback: {
    uri: "/feedback/:feedbackId",
    method: "GET",
    version: "",
  },
  updateFeedback: {
    uri: "/feedback/:feedbackId",
    method: "PUT",
    version: "",
  },
  deleteFeedback: {
    uri: "/feedback/:feedbackId",
    method: "DELETE",
    version: "",
  },
};
export default feedbackEndpoints;
