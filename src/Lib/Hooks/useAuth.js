export const useAUth = () => {
  const adminInfoString = localStorage.getItem("adminInfo");
  let user = null;
  let accessToken = null;
  if (adminInfoString) {
    const adminInfo = JSON.parse(adminInfoString);
    console.log(adminInfo, "admin");
    user = adminInfo.user;
    accessToken = adminInfo.accessToken;
  }

  return { user, accessToken };
};
