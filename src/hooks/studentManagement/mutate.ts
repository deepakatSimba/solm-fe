import { inviteStudent, updateStudent } from "@/services/studentManagement";
import { useMutation } from "@tanstack/react-query";

export const useInviteStudent = () => {
  return useMutation({
    mutationFn: (payload: any) => inviteStudent(payload),
  });
};

export const useUpdateStudent = () => {
  return useMutation({
    mutationFn: (payload: any) => updateStudent(payload),
  });
};
