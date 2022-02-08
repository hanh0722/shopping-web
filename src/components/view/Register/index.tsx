import { useEffect, useState } from "react";
import { REGISTER_FORM, REGISTER_OTP } from "../../../constants/page";
import { RegisterProps } from "../../../types/Register";
import { useRegister } from "../../../services/auth/RegisterApis";
import RegisterForm from "./RegisterForm";
import RegisterOTP from "./RegisterOTP";
const Register = () => {
  const [pageRegister, setPageRegister] = useState(REGISTER_FORM);
  const {
    isLoading: isLoadingRegister,
    RegisterUserApi,
    data: dataRegisterUser,
    error: errorRegisterUser,
    resetStateHandler: resetRegisterService
  } = useRegister();
  const [emailUser, setEmailUser] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const registerHandler = (dataUser: RegisterProps) => {
    if (!dataUser) {
      return;
    }
    const { username, password, email, phone } = dataUser;
    setEmailUser(email);
    setUsername(username);
    resetRegisterService();
    RegisterUserApi(username, password, phone, email);
  };
  useEffect(() => {
    if (isLoadingRegister || errorRegisterUser || !dataRegisterUser) {
      return;
    }
    setPageRegister(REGISTER_OTP);
  }, [isLoadingRegister, errorRegisterUser, dataRegisterUser]);
  return (
    <>
      {pageRegister === REGISTER_FORM && (
        <RegisterForm
          isLoading={isLoadingRegister}
          error={errorRegisterUser}
          registerHandler={registerHandler}
        />
      )}
      {pageRegister === REGISTER_OTP && <RegisterOTP email={emailUser} username={username}/>}
    </>
  );
};

export default Register;
