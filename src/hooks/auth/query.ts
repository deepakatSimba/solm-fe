import { currentUser } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";

export const useFetchUser = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: currentUser,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
  });
};

// export const useLogout = () => {
//   return useQuery({
//     queryKey: ["logout"],
//     queryFn: logout,
//     refetchOnWindowFocus: false,
//   });
// };
