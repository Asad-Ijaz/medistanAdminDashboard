import React from "react";
export const publicRoutes = [
  {
    key: "Home",
    path: "/",
    component: React.lazy(() =>
      import("../../../View/AuthView/signinView.jsx")
    ),
  },
];
export const protectedRoutes = [
  {
    key: "Invitations",
    path: "/invitations",
    component: React.lazy(() => import("../../../View/InvitationView.jsx")),
  },
  {
    key: "Doctors",
    path: "/doctors",
    component: React.lazy(() => import("../../../View/DoctorsView")),
  },
];
