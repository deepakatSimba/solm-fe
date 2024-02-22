import { getAllUsers, getSingleUser } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsers = (payload: any) => {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: () => getAllUsers(payload),
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useGetSingleUser = ({ pathParams }: any) => {
  const id = pathParams.userId;
  return useQuery({
    queryKey: ["get-single-user"],
    queryFn: () => getSingleUser({ pathParams }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
