import { getFeedback } from "@/services/feedback";
import { useQuery } from "@tanstack/react-query";
export const useGetFeedback =()=>{
    return useQuery({
        queryKey: ["feedbackmodal"],
        queryFn: getFeedback,
        refetchOnWindowFocus: false,
    })
}