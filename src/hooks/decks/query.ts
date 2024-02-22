import { getAllDeck } from "@/services/decks";
import { useQuery } from "@tanstack/react-query";

export const useGetAllDecks = (payload: any) => {
  const id = payload.query.collectionId;
  return useQuery({
    queryKey: ["decks"],
    queryFn: () => getAllDeck(payload),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
