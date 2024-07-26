import doctorSlice from "./DoctorSlice";
import invitationSlice from "./InvitationsSlice";
import AuthSlice from "./AuthSlice";
export const rootReducer = {
  doctor: doctorSlice,
  invitations: invitationSlice,
  auth: AuthSlice,
};
