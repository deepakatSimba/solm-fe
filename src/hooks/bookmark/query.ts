import { getBookmark, getFolder, getSingleFolder } from "@/services/bookmark";
import { useQuery } from "@tanstack/react-query";

export const useGetBookmark = (payload: any) => {
  // const id = payload.query.setId;
  return useQuery({
    queryKey: ["bookmark"],
    queryFn: () => getBookmark(payload),
    refetchOnWindowFocus: false,
    // enabled: !!id,
  });
};

export const useGetFolder = (payload: any) => {
  // const id = payload.query.setId;
  return useQuery({
    queryKey: ["folder"],
    queryFn: () => getFolder(payload),
    refetchOnWindowFocus: false,
    // enabled: !!id,
  });
};

export const useGetSingleFolder = ({ pathParams }: any) => {
  const id = pathParams.folderId;
  return useQuery({
    queryKey: ["getSingleFolder"],
    queryFn: () => getSingleFolder({ pathParams }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
