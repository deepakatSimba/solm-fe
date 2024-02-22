import { getAllAssignDecks } from "@/services/deckAssign";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAssignDecks = (payload: any) => {
  return useQuery({
    queryKey: ["assign-deck"],
    queryFn: () => getAllAssignDecks(payload),
    refetchOnWindowFocus: false,
  });
};
