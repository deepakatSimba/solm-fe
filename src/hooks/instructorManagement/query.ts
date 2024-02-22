import {
  getAllInstructor,
  getSingleInstructor,
} from "@/services/instructorManagement";
import { useQuery } from "@tanstack/react-query";

export const useGetInstructor = (payload: any) => {
  return useQuery({
    queryKey: ["get-instructor"],
    queryFn: () => getAllInstructor(payload),
    refetchOnWindowFocus: false,
  });
};

export const useGetSingleInstructor = ({ pathParams }: any) => {
  const id = pathParams.instructorId;
  return useQuery({
    queryKey: ["get-single-instructor"],
    queryFn: () => getSingleInstructor({ pathParams }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
