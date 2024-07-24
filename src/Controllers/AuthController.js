import axios from "axios";
class AuthController {
  static SignIn(data) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${import.meta.env.VITE_API_URL}api/admin/auth/sign-in`,
        method: "POST",
        data: data,
      })
        .then((res) => {
          if (res) {
            if (res?.data?.success) {
              const adminData = {
                user: res?.data?.data?.user,
                accessToken: res?.data?.data?.accessToken,
              };
              const adminDataString = JSON.stringify(adminData);

              localStorage.setItem("adminInfo", adminDataString);
              resolve(res?.data);
              console.log(res, "login successful");
            } else {
              reject(res?.data?.error?.message);
            }
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default AuthController;
