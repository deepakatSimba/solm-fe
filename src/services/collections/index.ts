import { callApi } from "@/utils/apiUtils";
import collectionsEndpoints from "@/utils/endpoints/collections";

export const addCollections = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...collectionsEndpoints.addCollections },
    body,
  });
};
export const getAllCollections = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...collectionsEndpoints.getAllCollections },
    query,
  });
};

export const getSingleCollections = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...collectionsEndpoints.getSingleCollections },
    pathParams,
  });
};
export const updateCollections = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...collectionsEndpoints.updateCollections },
    pathParams,
  });
};

export const deleteCollections = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...collectionsEndpoints.deleteCollections },
    pathParams,
  });
};
