import { callApi } from "@/utils/apiUtils";
import authEndpoints from "@/utils/endpoints/auth/auth";

export const currentUser = async () => {
  return callApi({
    uriEndPoint: {
      ...authEndpoints.currentUser,
    },
  });
};

export const loginUser = async ({ body }: any) => {
  return callApi({
    uriEndPoint: {
      ...authEndpoints.loginUser,
    },
    body,
  });
};

export const acceptInvitation = async ({ body, query }: any) => {
  return callApi({
    uriEndPoint: {
      ...authEndpoints.acceptInvitation,
    },
    body,
    query,
  });
};

export const logout = async () => {
  return callApi({
    uriEndPoint: {
      ...authEndpoints.logout,
    },
  });
};
