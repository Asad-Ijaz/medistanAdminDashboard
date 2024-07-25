import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../../../Components/Layout/AuthLayout";
import { useAUth } from "../../Hooks/useAuth";
const PublicRoute = () => {
  const { user } = useAUth();
  return !user ? (
    <Suspense fallback={null}>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </Suspense>
  ) : (
    <Navigate to={"/invitations"} />
  );
};

export default PublicRoute;
