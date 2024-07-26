import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "@/components/Layout/AuthLayout.jsx";
import { useAUth } from "@/Hooks/useAuth";

const PublicRoutes = () => {
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

export default PublicRoutes;
