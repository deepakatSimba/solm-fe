import { callApi } from "@/utils/apiUtils";
import usersEndpoints from "@/utils/endpoints/users";

export const getAllUsers = ({ query }: any) => {
  return callApi({
    uriEndPoint: { ...usersEndpoints.getAllUsers },
    query,
  });
};

export const getSingleUser = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: { ...usersEndpoints.getSingleUser },
    pathParams,
  });
};

export const updateUser=({pathParams,body}:any)=>{
  return callApi({
    uriEndPoint: {...usersEndpoints.updateUser },
    pathParams,
    body,
  });
}