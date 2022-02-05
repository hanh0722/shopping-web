import BannerSignIn from "./BannerSignIn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { PageFormActions, PAGE_TYPE } from "../../../store/PageFormSlice";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { AppDispatch } from "../../../model/store-model";
const Login = () => {
  const state = useSelector<RootState>((state) => state.page.page);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    return () => {
      dispatch(PageFormActions.changePageHandler(PAGE_TYPE.INTRODUCTION_FORM));
    };
  }, [dispatch]);
  return (
    <>
      {state === PAGE_TYPE.INTRODUCTION_FORM && <BannerSignIn />}
      {state === PAGE_TYPE.SIGN_IN_FORM && <LoginForm />}
    </>
  );
};

export default Login;
