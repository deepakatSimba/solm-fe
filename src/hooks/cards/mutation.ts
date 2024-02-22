import { addCardByAdmin, addCards, addIndependentCard, removeAssignedCard, updateCardsInSet } from "@/services/cards";
import { useMutation } from "@tanstack/react-query";

export const useAddCards = () => {
  return useMutation({
    mutationFn: (payload: any) => addCards(payload),
  });
};

export const useAddCardByAdmin = () => {
  return useMutation({
    mutationFn: (payload: any) => addCardByAdmin(payload),
  });
};

export const useAddIndependentCard = () => {
  return useMutation({
    mutationFn: (payload: any) => addIndependentCard(payload),
  });
};

export const useUpdateCardsInSet = () => {
  return useMutation({
    mutationFn: (payload: any) => updateCardsInSet(payload),
  });
};

export const useRemoveAssignedCard = () => {
  return useMutation({
    mutationFn: (payload: any) => removeAssignedCard(payload),
  });
};
