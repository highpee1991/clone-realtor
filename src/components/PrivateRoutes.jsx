import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoutes = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <div>Loading</div>;
  } else return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
