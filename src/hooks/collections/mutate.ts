import { addCollections,deleteCollections,updateCollections } from "@/services/collections";
import { useMutation } from "@tanstack/react-query";

export const useAddCollection = () => {
  return useMutation({
    mutationFn: (payload: any) => addCollections(payload),
  });
};
export const useDeleteCollection = () => {
    return useMutation({
      mutationFn: (payload: any) => deleteCollections(payload),
    });
  };
  export const useUpdateCollection = () => {
    return useMutation({
      mutationFn: (payload: any) => updateCollections(payload),
    });
  };
  