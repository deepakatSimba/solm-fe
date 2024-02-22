import { EndPoint } from "@/types/index";

const decksEndpoints: EndPoint = {
  addDeck: {
    uri: "/deck",
    method: "POST",
    version: "",
  },
  getAllDeck: {
    uri: "/deck",
    method: "GET",
    version: "",
  },
  updateDeck: {
    uri: "/deck/:deckId",
    method: "PUT",
    version: "",
  },
  deleteDeck: {
    uri: "/deck/:deckId",
    method: "DELETE",
    version: "",
  },
};
export default decksEndpoints;
