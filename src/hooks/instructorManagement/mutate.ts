import {
  inviteInstructor,
  updateInstructor,
} from "@/services/instructorManagement";
import { useMutation } from "@tanstack/react-query";

export const useInviteInstructor = () => {
  return useMutation({
    mutationFn: (payload: any) => inviteInstructor(payload),
  });
};

export const useUpdateInstructor = () => {
  return useMutation({
    mutationFn: (payload: any) => updateInstructor(payload),
  });
};
