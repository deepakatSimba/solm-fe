import { meUser } from "@/store";
import { useAtom } from "jotai";

import { Navigate, Outlet } from "react-router-dom";

const determineDashboardRoute = (userRole: string) => {
  switch (userRole) {
    case "admin":
      return "/adminDashboard";
    case "student":
      return "/dashboard";
    case "instructor":
      return "/instructorDashboard";
    case "creator":
      return "/creatorDashboard";

    default:
      return "/dashboard";
  }
};

const PublicRoutes = () => {
  const [loggedInUser] = useAtom(meUser);
  const user = "student";

  return loggedInUser?.[0]?._id ? (
    <Navigate to={determineDashboardRoute(user)} />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
