import { assignDeck } from "@/services/deckAssign";
import { useMutation } from "@tanstack/react-query";

export const useAssignDeck = () => {
    return useMutation({
      mutationFn: (payload: any) => assignDeck(payload),
    });
  };