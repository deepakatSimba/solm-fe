import { callApi } from "@/utils/apiUtils";
import feedbackEndpoints from "@/utils/endpoints/feedback";

export const addFeedback = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...feedbackEndpoints.addFeedback },
    body,
  });
};

export const getFeedback = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...feedbackEndpoints.getFeedback },
    query,
  });
};

export const getSingleFeedback = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...feedbackEndpoints.getSingleFeedback },
    pathParams,
  });
};

export const updateFeedback = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...feedbackEndpoints.updateFeedback },
    pathParams,
    body,
  });
};

export const deleteFeedback = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...feedbackEndpoints.deleteFeedback },
    pathParams,
  });
};
