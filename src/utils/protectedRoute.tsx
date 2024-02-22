import { meUser } from "@/store";
import { useAtom } from "jotai";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const [loggedInUser] = useAtom(meUser);
  return loggedInUser?.[0]?._id ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoutes;
