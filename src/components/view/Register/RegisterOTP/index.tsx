import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  LayoutTitleForm,
  InputOTP,
  SuccessAuth,
  ErrorResponseService,
  Loading,
} from "../../..";
import { NUMBER_OTP_INPUT } from "../../../../constants/Auth";
import { RegisterOTPProps } from "../../../../types/Register";
import useInterval from "../../../../hook/useInterval";
import FormLayout from "../../Login/FormLayout";
import styles from "./styles.module.scss";
import { parseTimeByMilliseconds } from "../../../../utils/moment";
import { useCheckOTPRegister } from "../../../../services/auth/RegisterApis";

const RegisterOTP: FC<RegisterOTPProps> = (props) => {
  const { isLoading, data, checkOTPService, error, resetStateHandler } =
    useCheckOTPRegister();
  const { time } = useInterval(5 * 60, 1000, 1, true);
  const [otp, setOTP] = useState<Array<string | null>>([
    ...Array(NUMBER_OTP_INPUT).fill(null),
  ]);

  const getOTPHandler = useCallback((value: Array<string | null>) => {
    setOTP(value);
  }, []);
  useEffect(() => {
    resetStateHandler();
    if (!otp || !props.username) {
      return;
    }
    const otpIsNotValid = otp.some((value) => !value);
    if (otpIsNotValid) {
      return;
    }
    const getOTP = +otp.join("");
    checkOTPService(getOTP, props.username);
  }, [otp, checkOTPService, props.username, resetStateHandler]);

  const messageTime = useMemo(() => {
    const value = parseTimeByMilliseconds(time, "seconds");
    let minute: number | string = value.minutes;
    if (value.minutes < 10) {
      minute = `0${value.minutes}`;
    }
    let seconds: number | string = value.seconds;
    if (value.seconds < 10) {
      seconds = `0${value.seconds}`;
    }
    return `${minute}:${seconds}`;
  }, [time]);

  return (
    <>
      <FormLayout isAllowRollBack className={`${styles.layout}`}>
        <LayoutTitleForm title="Xác minh tài khoản">
          <p className={`${styles.title} text-center`}>
            Nhập mã xác nhận được gửi đến email{" "}
            {props.email && <span>{props.email}</span>}
          </p>
          <p className={`text-center ${styles.title}`}>
            Mã này sẽ hết hạn sau <span>{messageTime}</span>
          </p>
          <InputOTP numberOTP={NUMBER_OTP_INPUT} getOTP={getOTPHandler} />
          {isLoading && <Loading/>}
          {!isLoading && !!error && <ErrorResponseService errorObject={error} />}
        </LayoutTitleForm>
      </FormLayout>
      <SuccessAuth condition={!isLoading && !!data} />
    </>
  );
};

export default RegisterOTP;
