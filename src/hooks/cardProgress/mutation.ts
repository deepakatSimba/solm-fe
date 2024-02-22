import { addCardProgress, deleteCardProgress } from "@/services/cardProgress";
import { useMutation } from "@tanstack/react-query";

export const useAddCardProgress = () => {
  return useMutation({
    mutationFn: (payload: any) => addCardProgress(payload),
  });
};


export const useDeleteCardProgress = () => {
  return useMutation({
    mutationFn: (payload: any) => deleteCardProgress(payload),
  });
};
