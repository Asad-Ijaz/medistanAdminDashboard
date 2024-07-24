import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Components/ui/dialog";
import { useFormik } from "formik";
import { inviteDoctorSchema } from "../Lib/Validations";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";

const InvitationDoctorDialog = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, values, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: inviteDoctorSchema,
    onSubmit: async () => {
      setLoading(true);
      console.log(values, "values");
      //   try {
      //     const response = await AuthController?.SignIn(values);
      //     setLoading(false);
      //     toast.success("login successfull !", {
      //       position: "top-right",
      //     });
      //     navigate("/invitations");
      //   } catch (error) {
      //     setLoading(false);
      //     toast.error(`${error} !`, {
      //       position: "top-right",
      //     });
      //   }
    },
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="!bg-white">
          <DialogHeader>
            <DialogTitle className="mb-5 text-2xl font-semibold text-center text-black ">
              Invite Doctor
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Input
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                    className=""
                    {...getFieldProps("email")}
                  />
                  {touched["email"] && (
                    <span className="text-[#CC2936] absolute left-2 text-[11px] -bottom-4 ">
                      {errors["email"]}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full mt-4 text-white bg-blue-600 h-11 "
                  loading={loading}
                >
                  Invite Doctor
                </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InvitationDoctorDialog;
