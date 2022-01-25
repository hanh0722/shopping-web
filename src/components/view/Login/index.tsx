import BannerSignIn from "./BannerSignIn";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { PAGE_TYPE } from "../../../store/PageFormSlice";
import LoginForm from "./LoginForm";
const RegisterForm = () => {
  const state = useSelector<RootState>((state) => state.page.page);
  return (
    <>
      {state === PAGE_TYPE.INTRODUCTION_FORM && <BannerSignIn />}
      {state === PAGE_TYPE.SIGN_IN_FORM && <LoginForm />}
    </>
  );
};

export default RegisterForm;
