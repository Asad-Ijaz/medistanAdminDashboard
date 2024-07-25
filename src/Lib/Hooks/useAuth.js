import { useSelector } from "react-redux";
export const useAUth = () => {
  const adminInfo = useSelector((state) => state?.auth?.session);
  // const adminInfoString = localStorage.getItem("adminInfo");

  return {
    user: adminInfo?.user,
    accessToken: adminInfo?.accessToken,
  };
};
