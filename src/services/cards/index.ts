import { callApi } from "@/utils/apiUtils";
import cardsEndpoints from "@/utils/endpoints/cards";

export const addCards = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...cardsEndpoints.addCards },
    body,
  });
};

export const addIndependentCard = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...cardsEndpoints.addIndependentCard },
    body,
  });
};

export const getAllCards = async ({ query }: any) =>
  callApi({
    uriEndPoint: {
      ...cardsEndpoints.getAllCards,
    },
    query,
  });

export const getIndependentCard = async ({ query }: any) =>
  callApi({
    uriEndPoint: {
      ...cardsEndpoints.getIndependentCard,
    },
    query,
  });

export const getSingleCard = async ({ pathParams }: any) =>
  callApi({
    uriEndPoint: {
      ...cardsEndpoints.getSingleCard,
    },
    pathParams,
  });

export const addCardByAdmin = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...cardsEndpoints.addCardByAdmin },
    body,
  });
};

export const getAllCardsByAdmin = async ({ query }: any) =>
  callApi({
    uriEndPoint: {
      ...cardsEndpoints.getAllCardsByAdmin,
    },
    query,
  });

export const updateCardsInSet = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...cardsEndpoints.updateCardsInSet },

    query,
  });
};

export const removeAssignedCard = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...cardsEndpoints.removeAssignedCard },
    pathParams,
  });
};
