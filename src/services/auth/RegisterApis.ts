import { useCallback } from "react";
import { CORE_API } from "../apis/base";
import useFetch from "../../hook/useFetch";
export const useRegister = () => {
  const { isLoading, data, fetchDataFromServer, error, resetStateHandler } =
    useFetch();

  const RegisterUserApi = useCallback(
    (username: string, password: string, phone: string, email: string) => {
      fetchDataFromServer({
        url: `${CORE_API}/api/auth/register`,
        data: {
          username: username,
          password: password,
          phone: phone,
          email: email,
        },
        method: "POST",
      });
    },
    [fetchDataFromServer]
  );

  return {
    isLoading,
    data,
    error,
    RegisterUserApi,
    resetStateHandler,
  };
};

export const useCheckOTPRegister = () => {
  const { isLoading, data, error, fetchDataFromServer, resetStateHandler } = useFetch();
  const checkOTPService = useCallback(
    (otp: number, username: string) => {
      fetchDataFromServer({
        method: 'POST',
        url: `${CORE_API}/api/auth/validate`,
        data: {
          otp,
          username,
        },
      });
    },
    [fetchDataFromServer]
  );
  return {
    isLoading,
    data,
    error,
    checkOTPService,
    resetStateHandler
  };
};
