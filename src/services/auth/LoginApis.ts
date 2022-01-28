import { CORE_API } from "../apis/base";
import request from "../AxiosConfig";
import useFetch from "../../hook/useFetch";
import { useCallback } from "react";
import { LoginRequest } from "../../types/Apis/LoginTypes";
export const LoginApis = async (username: string, password: string) => {
  try {
    const response = await request.post({
      url: `${CORE_API}/api/auth/login`,
      data: {
        username: username,
        password: password,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const useLogin = () => {
  const { fetchDataFromServer, error, data, isLoading } = useFetch();

  const loginApis = useCallback((username: string, password: string) => {
    fetchDataFromServer<LoginRequest>({
        method: 'POST',
        url: `${CORE_API}/api/auth/login`,
        data: {
            username: username,
            password: password
        }
    })
  }, [fetchDataFromServer]);

  return {
      isLoading,
      data,
      error,
      loginApis
  }
};
