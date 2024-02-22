import { addBulkUpload, createBulkUpload } from "@/services/bulkUpload";
import { useMutation } from "@tanstack/react-query";

export const useAddBulkUpload = () => {
  return useMutation({
    mutationFn: (payload: any) => addBulkUpload(payload),
  });
};

export const useCreateBulkUpload = () => {
  return useMutation({
    mutationFn: (payload: any) => createBulkUpload(payload),
  });
};
