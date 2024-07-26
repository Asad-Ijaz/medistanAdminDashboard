import * as Yup from "yup";

export const inviteDoctorSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!"),
});
