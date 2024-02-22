import { addSet } from "@/services/sets";
import { useMutation } from "@tanstack/react-query";

export const useAddSet = () => {
  return useMutation({
    mutationFn: (payload: any) => addSet(payload),
  });
};
