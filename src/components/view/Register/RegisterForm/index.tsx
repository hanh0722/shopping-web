import { FC, FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../../../constants/routes";
import FormLayout from "../../Login/FormLayout";
import Layout from "../../Login/Layout";
import styles from "./styles.module.scss";
import { Grid, Input, Button, Checkbox, ErrorMessage } from "../../..";
import useToggle from "../../../../hook/useToggle";
import {
  isValidEmail,
  isValidLength,
  isValidPassword,
  isValidPhone,
} from "../../../../utils/input";
import { RegisterFormProps, RegisterProps } from "../../../../types/Register";
import {
  EMAIL,
  PASSWORD,
  PHONE,
  RegisterIntialize,
  USERNAME,
} from "../../../../constants/Auth";
import { classList } from "../../../../utils/classList";
const RegisterForm: FC<RegisterFormProps> = (props) => {
  const [isAccept, setIsAccept] = useState(false);
  const { isToggle, changeToggleHandler } = useToggle(false);
  const [userInfor, setUserInfor] = useState<RegisterProps>(RegisterIntialize);

  useEffect(() => {
    return () => {
      setUserInfor(RegisterIntialize);
    };
  }, []);
  const changeAcceptHandler = (value: boolean) => {
    setIsAccept(value);
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

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid || !isAccept) {
      return;
    }
    props.registerHandler(userInfor);
  };
  return (
    <>
      <FormLayout
        isShowLogo
        isAllowRollBack
        onSubmitHandler={submitFormHandler}
      >
        <Layout className={styles.register} title="????ng k??">
          <p className={styles.title}>
            B???n ???? c?? t??i kho???n? <Link to={LOGIN}>????ng nh???p</Link>
          </p>
          <Grid className={styles.grid}>
            <Input
              validate
              message="T??n ????ng nh???p kh??ng ???????c ????? tr???ng"
              validateInput={(value) => isValidLength(value, 1)}
              placeholder="T??n ????ng nh???p"
              type="text"
              onChange={(value) => changeValueHandler(value, USERNAME)}
            />
            <Input
              validate
              message="M???t kh???u ph???i ch???a ??t nh???t 8 k?? t???, bao g???m 1 s??? [0-9], v?? 1 ch??? c??i in hoa, 1 ch??? c??i th?????ng"
              placeholder="M???t kh???u"
              validateInput={(value) => isValidPassword(value)}
              type={isToggle ? "text" : "password"}
              onChange={(value) => changeValueHandler(value, PASSWORD)}
            >
              {!isToggle && (
                <i onClick={changeToggleHandler} className="far fa-eye"></i>
              )}
              {isToggle && (
                <i
                  onClick={changeToggleHandler}
                  className="far fa-eye-slash"
                ></i>
              )}
            </Input>
            <Input
              validate
              message="S??? ??i???n tho???i kh??ng h???p l???"
              placeholder="S??? ??i???n tho???i"
              validateInput={(value) => isValidPhone(value)}
              type="number"
              onChange={(value) => changeValueHandler(value, PHONE)}
            />
            <Input
              validate
              message="Email kh??ng h???p l???"
              placeholder="Email"
              validateInput={(value) => isValidEmail(value)}
              type="email"
              onChange={(value) => changeValueHandler(value, EMAIL)}
            />
            <div className={`flex items-center ${styles.allow}`}>
              <Checkbox onChangeChecked={changeAcceptHandler} />
              <p>T??i ?????ng ?? v???i ??i???u kho???n v?? d???ch v??? c???a Tiki</p>
            </div>
            <Button
              type="submit"
              className={classList(
                formIsValid ? "cursor-pointer" : "cursor-not-allowed"
              )}
              disabled={!formIsValid || props.isLoading}
            >
              {props.isLoading ? "??ang x??? l??" : "????ng k??"}
            </Button>
          </Grid>
        </Layout>
      </FormLayout>

      <ErrorMessage 
        error
        conditionActive={!!props.error}
        message={
          "S??? ??i???n tho???i, email, ho???c t??n ????ng nh???p ???? t???n t???i trong h??? th???ng"
        }
      />
    </>
  );
};

export default RegisterForm;
