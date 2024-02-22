import { addDeck } from "@/services/decks";
import { useMutation } from "@tanstack/react-query";

export const useAddDeck = () => {
  return useMutation({
    mutationFn: (payload: any) => addDeck(payload),
  });
};
