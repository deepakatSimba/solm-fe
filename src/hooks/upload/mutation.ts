import { upload } from "@/services/upload";
import { useMutation } from "@tanstack/react-query";

export const useUpload = () => {
  return useMutation({
    mutationFn: (payload: any) => upload(payload),
  });
};
