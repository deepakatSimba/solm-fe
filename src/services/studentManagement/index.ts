import { callApi } from "@/utils/apiUtils";
import studentManagementEndPoints from "@/utils/endpoints/studentManagement";

export const inviteStudent = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...studentManagementEndPoints.inviteStudent },
    body,
  });
};

export const getAllStudent = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...studentManagementEndPoints.getAllStudent },
    query,
  });
};

export const getSingleStudent = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...studentManagementEndPoints.getSingleStudent },
    pathParams,
  });
};

export const updateStudent = ({ pathParams, body }: any) => {
  return callApi({
    uriEndPoint: { ...studentManagementEndPoints.updateStudent },
    pathParams,
    body,
  });
};
