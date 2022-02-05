import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../../../constants/routes";
import FormLayout from "../../Login/FormLayout";
import Layout from "../../Login/Layout";
import styles from "./styles.module.scss";
import { Grid, Input, Button, Checkbox } from "../../..";
import useToggle from "../../../../hook/useToggle";
import {
  isValidEmail,
  isValidLength,
  isValidPassword,
  isValidPhone,
} from "../../../../utils/input";
import { RegisterProps } from "../../../../types/Register";
import {
  EMAIL,
  PASSWORD,
  PHONE,
  RegisterIntialize,
  USERNAME,
} from "../../../../constants/Auth";
import { classList } from "../../../../utils/classList";
const RegisterForm = () => {
  const [isAccept, setIsAccept] = useState(false);
  const { isToggle, changeToggleHandler } = useToggle(false);
  const [userInfor, setUserInfor] = useState<RegisterProps>(RegisterIntialize);

  useEffect(() => {
    return () => {
      setUserInfor(RegisterIntialize);
    }
  }, []);
  const changeAcceptHandler = (value: boolean) => {
    setIsAccept(value);
  };
  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!isAccept) {
      return;
    }
  };
  const changeValueHandler = (value: string, type: string) => {
    switch (type) {
      case USERNAME:
        return setUserInfor((prevState) => {
          return {
            ...prevState,
            username: value,
          };
        });
      case PASSWORD:
        return setUserInfor((prevState) => {
          return {
            ...prevState,
            password: value,
          };
        });
      case PHONE:
        return setUserInfor((prevState) => {
          return {
            ...prevState,
            phone: value,
          };
        });
      case EMAIL:
        return setUserInfor((prevState) => {
          return {
            ...prevState,
            email: value,
          };
        });
      default:
        return;
    }
  };

  const formIsValid = useMemo(() => {
    if (!isAccept) {
      return false;
    }
    const parsedValueUser = Object.values(userInfor);
    const userDataIsValid = parsedValueUser.some((value) => !!value);
    if (!userDataIsValid) {
      return false;
    }
    return true;
  }, [isAccept, userInfor]);

  return (
    <FormLayout isShowLogo isAllowRollBack onSubmitHandler={submitFormHandler}>
      <Layout className={styles.register} title="Đăng ký">
        <p className={styles.title}>
          Bạn đã có tài khoản? <Link to={LOGIN}>Đăng nhập</Link>
        </p>
        <Grid className={styles.grid}>
          <Input
            validate
            message="Tên đăng nhập không được để trống"
            validateInput={(value) => isValidLength(value, 1)}
            placeholder="Tên đăng nhập"
            type="text"
            onChange={(value) => changeValueHandler(value, USERNAME)}
          />
          <Input
            validate
            message="Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm 1 số [0-9], và 1 chữ cái in hoa, 1 chữ cái thường"
            placeholder="Mật khẩu"
            validateInput={(value) => isValidPassword(value)}
            type={isToggle ? "text" : "password"}
            onChange={(value) => changeValueHandler(value, PASSWORD)}
          >
            {!isToggle && (
              <i onClick={changeToggleHandler} className="far fa-eye"></i>
            )}
            {isToggle && (
              <i onClick={changeToggleHandler} className="far fa-eye-slash"></i>
            )}
          </Input>
          <Input
            validate
            message="Số điện thoại không hợp lệ"
            placeholder="Số điện thoại"
            validateInput={(value) => isValidPhone(value)}
            type="number"
            onChange={(value) => changeValueHandler(value, PHONE)}
          />
          <Input
            validate
            message="Email không hợp lệ"
            placeholder="Email"
            validateInput={(value) => isValidEmail(value)}
            type="email"
            onChange={(value) => changeValueHandler(value, EMAIL)}
          />
          <div className={`flex items-center ${styles.allow}`}>
            <Checkbox onChangeChecked={changeAcceptHandler} />
            <p>Tôi đồng ý với điều khoản và dịch vụ của Tiki</p>
          </div>
          <Button className={classList(formIsValid ? 'cursor-pointer' : 'cursor-not-allowed')} disabled={!formIsValid}>Đăng ký</Button>
        </Grid>
      </Layout>
    </FormLayout>
  );
};

export default RegisterForm;
