import { EndPoint } from "@/types/index";

const cardProgressEndpoints: EndPoint = {
  addCardProgress: {
    uri: "/cardProgress",
    method: "POST",
    version: "",
  },
  getCardProgress: {
    uri: "/cardProgress",
    method: "GET",
    version: "",
  },
  updateCardProgress: {
    uri: "/cardProgress/:cardId",
    method: "PUT",
    version: "",
  },
  deleteCardProgress: {
    uri: "/cardProgress/:cardId",
    method: "DELETE",
    version: "",
  },
};
export default cardProgressEndpoints;
