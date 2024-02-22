import { callApi } from "@/utils/apiUtils";
import creatorManagementEndPoints from "@/utils/endpoints/creatorManagement";

export const inviteCreator = async ({ body }: any) =>
  callApi({
    uriEndPoint: {
      ...creatorManagementEndPoints.inviteCreator,
    },
    body,
  });

export const getAllCreator = async ({ query }: any) =>
  callApi({
    uriEndPoint: {
      ...creatorManagementEndPoints.getAllCreator,
    },
    query,
  });
