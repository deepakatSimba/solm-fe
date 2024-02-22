import { callApi } from "@/utils/apiUtils";
import setsEndpoints from "@/utils/endpoints/sets";

export const addSet = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...setsEndpoints.addSet },
    body,
  });
};

export const getAllSets = ({ query }: any) => {
  return callApi({
    uriEndPoint: {
      ...setsEndpoints.getAllSets,
    },
    query,
  });
};

export const updateSet = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...setsEndpoints.updateSet },
    pathParams,
    body,
  });
};

export const deleteSet = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...setsEndpoints.deleteSet },
    pathParams,
  });
};
