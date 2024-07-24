import doctorSlice from "./DoctorSlice";
import invitationSlice from "./InvitationsSlice";

export const rootReducer = {
  doctor: doctorSlice,
  invitations: invitationSlice,
};
