import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-y-auto flex justify-center items-center">
      <div className="max-w-[530px] w-full h-auto rounded-md shadow-slate-200 shadow-md p-5 ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
