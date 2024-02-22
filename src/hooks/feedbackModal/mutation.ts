import { addFeedback } from "@/services/feedback";
import { useMutation } from "@tanstack/react-query";
export const useAddFeedback =()=>{
    return useMutation({
        mutationFn: (payload: any) => addFeedback(payload),
    })
}