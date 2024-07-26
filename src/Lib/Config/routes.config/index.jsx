import React from "react";
import SignInView from "../../../View/AuthView/signinView.jsx";
import InvitationView from "../../../View/InvitationView/InvitationDoctorStatusTable.jsx";
import DoctorsView from "../../../View/DoctorsView/index.jsx";
export const publicRoutes = [
  {
    key: "Home",
    path: "/",
    component: SignInView,
  },
];
export const protectedRoutes = [
  {
    key: "Invitations",
    path: "/invitations",
    component: InvitationView,
  },
  {
    key: "Doctors",
    path: "/doctors",
    component: DoctorsView,
  },
];
