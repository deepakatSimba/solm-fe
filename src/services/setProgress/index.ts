import { callApi } from "@/utils/apiUtils";
import setProgressEndpoints from "@/utils/endpoints/setProgress";

export const addSetProgress = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...setProgressEndpoints.addSetProgress },
    body,
  });
};

export const getSetProgress = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...setProgressEndpoints.getSetProgress },
    query,
  });
};

export const updateSetProgress = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...setProgressEndpoints.updateSetProgress },
    pathParams,
    body,
  });
};

export const deleteSetProgress = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...setProgressEndpoints.deleteSetProgress },
    pathParams,
  });
};
