import {
  getAllCards,
  getAllCardsByAdmin,
  getIndependentCard,
  getSingleCard,
} from "@/services/cards";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCards = (payload: any) => {
  // const id = payload.query.setId;
  return useQuery({
    queryKey: ["cards"],
    queryFn: () => getAllCards(payload),
    refetchOnWindowFocus: false,
    // enabled: !!id,
  });
};
export const useGetIndependentCard = (payload: any) => {
  return useQuery({
    queryKey: ["independent-card"],
    queryFn: () => getIndependentCard(payload),
    refetchOnWindowFocus: false,
  });
};

export const useGetSingleCard = ({ pathParams }: any) => {
  const id = pathParams.cardId;
  return useQuery({
    queryKey: ["get-single-card"],
    queryFn: () => getSingleCard({ pathParams }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export const useGetAllCardsByAdmin = (payload: any) => {
  // const id = payload.query.setId;
  return useQuery({
    queryKey: ["admin-cards"],
    queryFn: () => getAllCardsByAdmin(payload),
    refetchOnWindowFocus: false,
    // enabled: !!id,
  });
};
