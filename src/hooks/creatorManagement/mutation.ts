import { inviteCreator } from "@/services/creatorManagement";
import { useMutation } from "@tanstack/react-query";

export const useInviteCreator = () => {
  return useMutation({
    mutationFn: (payload: any) => inviteCreator(payload),
  });
};
