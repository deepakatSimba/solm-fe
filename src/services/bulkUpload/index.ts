import { callApi } from "@/utils/apiUtils";
import bulkUploadEndpoints from "@/utils/endpoints/bulkUpload";

export const addBulkUpload = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...bulkUploadEndpoints.bulkUpload },
    body,
  });
};

export const createBulkUpload = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...bulkUploadEndpoints.createBulkUpload },
    body,
  });
};