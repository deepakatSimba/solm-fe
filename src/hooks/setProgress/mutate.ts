import { addSetProgress, deleteSetProgress } from "@/services/setProgress";
import { useMutation } from "@tanstack/react-query";

export const useAddSetProgress = () => {
  return useMutation({
    mutationFn: (payload: any) => addSetProgress(payload),
  });
};

export const useDeleteSetProgress = () => {
  return useMutation({
    mutationFn: (payload: any) => deleteSetProgress(payload),
  });
};
