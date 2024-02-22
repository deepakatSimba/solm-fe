import { acceptInvitation, loginUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (payload: any) => loginUser(payload),
    // onSuccess: () => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries({ queryKey: ['todos'] })
    // },
  });
};

export const useAcceptInvitation = () => {
  return useMutation({
    mutationFn: (payload: any) => acceptInvitation(payload),
  });
};