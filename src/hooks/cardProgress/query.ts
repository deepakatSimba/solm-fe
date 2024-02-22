import { getCardProgress } from "@/services/cardProgress";
import { useQuery } from "@tanstack/react-query";

export const useGetCardProgress = (payload: any) => {
  const id = payload.query.setId;
  return useQuery({
    queryKey: ["cardsProgress"],
    queryFn: () => getCardProgress(payload),
    refetchOnWindowFocus: false,
    enabled: !!id,
    staleTime: 0,
    retry: false,
  });
};
