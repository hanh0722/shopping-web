import React, { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LoginApis } from "../../../../services/auth/LoginApis";
import { Button, Grid, Input, Loading, SocialLogin } from "../../..";
import useToggle from "../../../../hook/useToggle";
import { FORGET_PASSWORD, REGISTER } from "../../../../constants/routes";
import {
  isValidEmail,
  isValidPassword,
  isValidPhone,
} from "../../../../utils/input";
import FormLayout from "../FormLayout";
import Layout from "../Layout";
import styles from "./styles.module.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isToggle, changeToggleHandler } = useToggle(false);
  const formIsValid = useMemo(() => {
    return (
      isValidPassword(password) &&
      (isValidEmail(username) || isValidPhone(username))
    );
  }, [password, username]);
  const submitFormHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    const response = await LoginApis(username, password);
    console.log(response);

  };
  const userNameIsValid = (value: string) => {
    return isValidEmail(value) || isValidPhone(value);
  };

  return (
    <FormLayout onSubmitHandler={submitFormHandler} isAllowRollBack isShowLogo>
      <Layout title="Đăng nhập">
        <p className={styles.title}>
          Bạn chưa có tài khoản? <Link to={REGISTER}>Đăng ký</Link>
        </p>
        <Grid className={styles.grid}>
          <Input
            onChange={setUsername}
            placeholder="Nhập email/số điện thoại"
            type="text"
            validate
            validateInput={userNameIsValid}
            message="Email hoặc số điện thoại không hợp lệ"
          >
            <i className="far fa-envelope"></i>
          </Input>
          <Input
            onChange={setPassword}
            className={isToggle ? styles.active : ""}
            placeholder="Mật khẩu"
            type={isToggle ? "text" : "password"}
            validate
            validateInput={isValidPassword}
            message="Mật khẩu ít nhất 8 chữ cái và chứa 1 chữ thường [a-z], 1 chữ hoa [A-Z]"
          >
            <i
              onClick={changeToggleHandler}
              className={"far fa-eye cursor-pointer"}
            ></i>
          </Input>
        </Grid>
        <p className={`text-right ${styles.forget}`}>
          <Link to={FORGET_PASSWORD}>Quên mật khẩu?</Link>
        </p>
        <Button
          type="submit"
          disabled={!formIsValid}
          className={`w-full ${styles.button}`}
        >
          Đăng nhập
        </Button>
        <div className={`text-center ${styles["title-socialize"]}`}>
          <p className={`inline-block`}>Hoặc</p>
        </div>
        <SocialLogin />
        <Loading className="pt-3" />
      </Layout>
    </FormLayout>
  );
};

export default LoginForm;
