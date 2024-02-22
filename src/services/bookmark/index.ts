import { callApi } from "@/utils/apiUtils";
import bookmarkEndpoints from "@/utils/endpoints/bookmark";

export const addBookmark = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.addBookmark },
    body,
  });
};

export const getBookmark = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.getBookmark },
    query,
  });
};

export const getSingleBookmark = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.getSingleBookmark },
    pathParams,
  });
};

export const deleteBookmark = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.deleteBookmark },
    pathParams,
  });
};
export const addFolder = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.addFolder },
    body,
  });
};

export const getFolder = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.getFolder },
    query,
  });
};

export const getSingleFolder = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.getSingleFolder },
    pathParams,
  });
};

export const deleteFolder = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...bookmarkEndpoints.deleteFolder },
    pathParams,
  });
};
