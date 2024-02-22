import { callApi } from "@/utils/apiUtils";
import decksEndpoints from "@/utils/endpoints/decks";

export const addDeck = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...decksEndpoints.addDeck },
    body,
  });
};

export const getAllDeck = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...decksEndpoints.getAllDeck },
    query,
  });
};

export const updateDeck = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...decksEndpoints.updateDeck },
    pathParams,
    body,
  });
};

export const deleteDeck = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...decksEndpoints.deleteDeck },
    pathParams,
  });
};
