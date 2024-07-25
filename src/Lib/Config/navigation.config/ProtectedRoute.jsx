import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProtectedLayout from "../../../Components/Layout/ProtectedLayout";
import { useAUth } from "../../Hooks/useAuth";
const ProtectedRoute = () => {
  const { user } = useAUth();
  return !!user ? (
    <Suspense fallback={null}>
      <ProtectedLayout>
        <Outlet />
      </ProtectedLayout>
    </Suspense>
  ) : (
    <Navigate to={"/"} />
  );
};

export default ProtectedRoute;
