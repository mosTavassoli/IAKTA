import { apiPrivate } from "../api/AxiosConfig";
import { useEffect } from "react";
import useAuth from "./useAuth";

export const useAxiosPrivate = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = apiPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return apiPrivate;
};
