import { getAllCreator } from "@/services/creatorManagement";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCreator = (payload: any) => {
  return useQuery({
    queryKey: ["get-creator"],
    queryFn: () => getAllCreator(payload),
    refetchOnWindowFocus: false,
  });
};

// export const useGetSingleInstructor = ({ pathParams }: any) => {
//   const id = pathParams.instructorId;
//   return useQuery({
//     queryKey: ["get-single-creator"],
//     queryFn: () => getSingleInstructor({ pathParams }),
//     refetchOnWindowFocus: false,
//     enabled: !!id,
//   });
// };
