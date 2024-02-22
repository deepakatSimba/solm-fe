import { addBookmark, addFolder, deleteFolder } from "@/services/bookmark";
import { useMutation } from "@tanstack/react-query";

export const useAddBookmark = () => {
  return useMutation({
    mutationFn: (payload: any) => addBookmark(payload),
  });
};

export const useAddFolder = () => {
  return useMutation({
    mutationFn: (payload: any) => addFolder(payload),
  });
};

export const useDeleteFolder = () => {
  return useMutation({
    mutationFn: (payload: any) => deleteFolder(payload),
  });
};
