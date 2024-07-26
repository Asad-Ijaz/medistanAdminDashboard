import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAUth } from "@/Hooks/useAuth";
import ProtectdLayout from "@/components/Layout/ProtectedLayout";
const ProtectedRoute = () => {
  const { user } = useAUth();
  return !!user ? (
    <Suspense fallback={null}>
      <ProtectdLayout>
        <Outlet />
      </ProtectdLayout>
    </Suspense>
  ) : (
    <Navigate to={"/"} />
  );
};

export default ProtectedRoute;
