import { getSetProgress } from "@/services/setProgress";
import { useQuery } from "@tanstack/react-query";

export const useGetSetProgress = (payload: any) => {
  const id = payload.query.deckId;
  return useQuery({
    queryKey: ["setProgress"],
    queryFn: () => getSetProgress(payload),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
