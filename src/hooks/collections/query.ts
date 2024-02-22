import { getAllCollections, getSingleCollections } from "@/services/collections";
import { useQuery } from "@tanstack/react-query";

export const useGetCollection = (payload: any) => {
  return useQuery({
    queryKey: ["all-collections"],
    queryFn: () => getAllCollections(payload),
    refetchOnWindowFocus: false,
  });
};

export const useGetSingleCollection = ({ pathParams }: any) => {
  const id = pathParams.studentId;
  return useQuery({
    queryKey: ["get-single-collection"],
    queryFn: () => getSingleCollections({ pathParams }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
