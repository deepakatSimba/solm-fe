import { getAllStudent, getSingleStudent } from "@/services/studentManagement";
import { useQuery } from "@tanstack/react-query";

export const useGetStudent = (payload: any) => {
  const id = payload.query.deckId;
  return useQuery({
    queryKey: ["get-student"],
    queryFn: () => getAllStudent(payload),
    refetchOnWindowFocus: false,
    enabled: !!id,
    staleTime: 0,
  });
};
export const useGetSingleStudent = ({ pathParams }: any) => {
  const id = pathParams.studentId;
  return useQuery({
    queryKey: ["get-single-student"],
    queryFn: () => getSingleStudent({ pathParams }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
