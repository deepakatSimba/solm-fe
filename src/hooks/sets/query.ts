import { getAllSets } from "@/services/sets";
import { useQuery } from "@tanstack/react-query";

export const useGetAllSets = (payload: any) => {
  return useQuery({
    queryKey: ["sets"],
    queryFn: () => getAllSets(payload),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
};
