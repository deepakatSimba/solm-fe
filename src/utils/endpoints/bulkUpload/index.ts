import { EndPoint } from "@/types/index";

const bulkUploadEndpoints: EndPoint = {
  bulkUpload: {
    uri: "/upload/bulk",
    method: "POST",
    version: "",
  },
  createBulkUpload: {
    uri: "/upload/createBulkUpload",
    method: "POST",
    version: "",
  },
};
export default bulkUploadEndpoints;
