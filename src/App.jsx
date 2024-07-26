import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Config/navigation.config/ProtectedRoute.jsx";
import PublicRoutes from "./Config/routes.config/index.jsx";
import {
  protectedRoutes,
  publicRoutes,
} from "./Config/routes.config/index.jsx";
import PageNotFound from "./View/404View";
import SignInView from "./View/AuthView/signinView.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAUth } from "./Hooks/useAuth.js";
import AuthController from "./Controllers/AuthController.js";
function App() {
  const selector = useSelector((state) => state);
  console.log(selector, "selector is ");
  const { user } = useAUth();
  !user && AuthController.restorePersistedCredentials();
  return (
    <>
      <Routes>
        <Route path="" element={<PublicRoutes />}>
          {publicRoutes?.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.key}
                element={<route.component />}
              />
            );
          })}
        </Route>
        <Route path="" element={<ProtectedRoute />}>
          {protectedRoutes?.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.key}
                element={<route.component />}
              />
            );
          })}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
