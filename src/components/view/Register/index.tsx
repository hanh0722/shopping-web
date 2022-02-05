import { useState } from "react";
import { REGISTER_FORM } from "../../../constants/page";
import RegisterForm from "./RegisterForm";
const Register = () => {
  const [pageRegister, setPageRegister] = useState(REGISTER_FORM);

  return <>{pageRegister === REGISTER_FORM && <RegisterForm />}</>;
};

export default Register;
