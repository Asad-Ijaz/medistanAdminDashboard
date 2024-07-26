import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../lib/Validations";
import AuthController from "../../Controllers/AuthController";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
// import { Input } from "../../Components/Ui/input";
// import { Button } from "../../Components/Ui/button";
// import AuthController from "../../Controllers/AuthController";
// import { loginSchema } from "../../Lib/Validations";
const SignInView = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, values, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        const response = await AuthController?.SignIn(values);
        setLoading(false);
        toast.success("login successfull !", {
          position: "top-right",
        });
        navigate("/invitations");
      } catch (error) {
        setLoading(false);
        toast.error(`${error} !`, {
          position: "top-right",
        });
      }
    },
  });
  return (
    <div className="w-full">
      <p className="mb-8 text-xl font-bold text-center">Log In</p>
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
        <div className="relative">
          <Input
            placeholder="Enter Password"
            name="password"
            type="password"
            className=""
            {...getFieldProps("password")}
          />
          {touched["password"] && (
            <span className="text-[#CC2936] absolute left-2 text-[11px] -bottom-4 ">
              {errors["password"]}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="w-full mt-4 text-white bg-blue-600 h-11 "
          loading={loading}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default SignInView;
