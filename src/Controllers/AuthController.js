import axios from "axios";
import { NETWORK_ERROR } from "@/Consts/Error.consts";
import { setSession, userLoggedOut } from "@/Store/Slices/AuthSlice";
import { apiClient } from "@/Config/api.config";
import { store } from "@/Store";

class AuthController {
  static SignIn(data) {
    return new Promise((resolve, reject) => {
      apiClient
        .post(`api/admin/auth/sign-in`, data)
        .then((res) => {
          if (res?.data?.success) {
            const adminData = {
              user: res?.data?.data?.user,
              accessToken: res?.data?.data?.accessToken,
            };
            store.dispatch(setSession(adminData));
            AuthController?.persistCredentials(adminData);

            resolve(res?.data);
            console.log(res, "login successful");
          } else {
            reject(res?.data?.error?.message);
          }
        })
        .catch((err) => {
          reject(NETWORK_ERROR);
        });
    });
  }
  static persistCredentials = (session) => {
    if (!!session) {
      store.dispatch(setSession(session));
      localStorage?.setItem("Medicine-adminInfo", JSON.stringify(session));
    }
  };
  static getPersistedCredentials = () => {
    let strSessionData = localStorage?.getItem("Medicine-adminInfo");
    if (strSessionData) {
      return JSON.parse(strSessionData);
    } else {
      return null;
    }
  };
  static restorePersistedCredentials() {
    let persistedData = AuthController.getPersistedCredentials();
    console.log(persistedData, "@persisted data.!");
    if (persistedData) {
      store.dispatch(setSession(persistedData));
      return persistedData?.user;
    } else {
      return false;
    }
  }
  static logout = async () => {
    await store.dispatch(setSession(null));
    await localStorage?.removeItem("Medicine-adminInfo");
    await store.dispatch(userLoggedOut());
  };
}
export default AuthController;
