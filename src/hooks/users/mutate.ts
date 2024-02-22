import { updateUser } from "@/services/users";
import { useMutation } from "@tanstack/react-query";
export const useUpdateUser=()=>{
    return useMutation({
        mutationFn: (payload: any) => updateUser(payload),
    });
}