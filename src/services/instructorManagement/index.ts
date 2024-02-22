import { callApi } from "@/utils/apiUtils";
import instructorManagementEndPoints from "@/utils/endpoints/instructorManagement";

export const inviteInstructor = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...instructorManagementEndPoints.inviteInstructor },
    body,
  });
};
export const getAllInstructor = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...instructorManagementEndPoints.getInstructor },
    query,
  });
};
export const getSingleInstructor = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...instructorManagementEndPoints.getSingleInstructor },
    pathParams,
  });
};
export const updateInstructor = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...instructorManagementEndPoints.updateInstructor },
    pathParams,
    body,
  });
};