import { EndPoint } from "@/types/index";

const deckAssignEndpoints: EndPoint = {
  assignDeck: {
    uri: "/deck-assign",
    method: "POST",
    version: "",
  },
  getAllAssignDecks: {
    uri: "/deck-assign",
    method: "GET",
    version: "",
  },
};
export default deckAssignEndpoints;
