import { useSelector } from "react-redux";
export const useAUth = () => {
  const adminInfo = useSelector((state) => state?.auth?.session);

  return {
    user: adminInfo?.user,
    accessToken: adminInfo?.accessToken,
  };
};
