import { callApi } from "@/utils/apiUtils";
import deckAssignEndpoints from "@/utils/endpoints/deckAssign";

export const assignDeck = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...deckAssignEndpoints.assignDeck },
    body,
  });
};

export const getAllAssignDecks = async ({ query }: any) =>
  callApi({
    uriEndPoint: {
      ...deckAssignEndpoints.getAllAssignDecks,
    },
    query,
  });
