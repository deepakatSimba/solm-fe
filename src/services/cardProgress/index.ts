import { callApi } from "@/utils/apiUtils";
import cardProgressEndpoints from "@/utils/endpoints/cardProgress";

export const addCardProgress = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...cardProgressEndpoints.addCardProgress },
    body,
  });
};

export const getCardProgress = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...cardProgressEndpoints.getCardProgress },
    query,
  });
};

export const updateCardProgress = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...cardProgressEndpoints.updateCardProgress },
    pathParams,
    body,
  });
};

export const deleteCardProgress = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...cardProgressEndpoints.deleteCardProgress },
    pathParams,
  });
};
