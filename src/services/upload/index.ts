import { callApi } from "@/utils/apiUtils";
import uploadEndpoints from "@/utils/endpoints/upload";

export const upload = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...uploadEndpoints.upload },
    body,
  });
};
