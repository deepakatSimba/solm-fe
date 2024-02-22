import { EndPoint } from "@/types/index";

const cardsEndpoints: EndPoint = {
  addCards: {
    uri: "/card",
    method: "POST",
    version: "",
  },
  addIndependentCard: {
    uri: "/card/add/deck",
    method: "PUT",
    version: "",
  },
  getAllCards: {
    uri: "/card",
    method: "GET",
    version: "",
  },
  getIndependentCard: {
    uri: "/card/independent/cards",
    method: "GET",
    version: "",
  },
  getSingleCard: {
    uri: "/card/:cardId",
    method: "GET",
    version: "",
  },
  addCardByAdmin: {
    uri: "/card/admin/instructor",
    method: "POST",
    version: "",
  },
  getAllCardsByAdmin: {
    uri: "/card/admin/instructor",
    method: "GET",
    version: "",
  },
  updateCardsInSet: {
    uri: "/card/add/set",
    method: "PUT",
    version: "",
  },
  removeAssignedCard: {
    uri: "/card/:cardId/remove",
    method: "DELETE",
    version: "",
  },
};
export default cardsEndpoints;
