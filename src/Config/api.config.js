import AuthController from "@/Controllers/AuthController";

import axios from "axios";

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
apiClient.interceptors.request.use(
  (config) => {
    const persistData = AuthController.getPersistedCredentials();
    console.log(persistData, "persistedData");
    if (persistData?.accessToken) {
      config.headers[`Authorization`] = persistData.accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
