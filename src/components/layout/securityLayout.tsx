import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { meUser } from "@/store";
import { Navigate } from "react-router-dom";
import Loader from "../custom/Spin";
import { useFetchUser } from "@/hooks/auth/query";
import { queryProps } from "@/types";

const SecurityLayout = ({ children }: { children: React.ReactNode }) => {
  const [, setLoggedInUser] = useAtom(meUser);

  // ME API
  const {
    data: currentUser,
    isLoading,
    isFetched,
    isError,
  }: queryProps = useFetchUser();

  useEffect(() => {
    if (currentUser) {
      setLoggedInUser(currentUser);
    }
  }, [currentUser]);

  if ((!currentUser && isLoading) || !isFetched) {
    return (
      <div className="opacity-100">
        <Loader />
      </div>
    );
  }
  if (isError) {
    setLoggedInUser(undefined);
  }

  const routes = ["/forgot-password", "/reset-password", "/set-password"];

  if (!routes.includes(window.location.pathname)) {
    if (!currentUser && window.location.pathname !== "/auth/login") {
      return <Navigate to={`/auth/login`} />;
    }
  }
  return children;
};

export default SecurityLayout;
