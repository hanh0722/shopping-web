import React, { FC, KeyboardEvent, useState, useMemo, useEffect } from "react";
import { Input } from "..";
import { InputOTPProps } from "../../types/input";
import styles from "./styles.module.scss";

const InputOTP: FC<InputOTPProps> = (props) => {
  const { getOTP } = props;
  const [otp, setOTP] = useState<Array<string | null>>([
    ...Array(props.numberOTP || 6).fill(null),
  ]);
  const createRef = useMemo(() => {
    const refArray = [...Array.from(Array(props.numberOTP || 6).keys())].map(
      (item) => {
        return React.createRef<HTMLInputElement>();
      }
    );
    return refArray;
  }, [props.numberOTP]);
  const changeValueHandler = (value: string, index: number) => {
    if (otp[index]) {
      return;
    }
    const arrayOTP = [...otp];
    arrayOTP[index] = value;
    setOTP(arrayOTP);
  };
  const keyUpHandler = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const arrayOTP = [...otp];
    const getOTPNumberByIndex = arrayOTP[index];
    const OTPIsNotFilled = otp.findIndex((item) => !item);
    if (OTPIsNotFilled !== -1 && event.keyCode !== 8) {
      createRef[OTPIsNotFilled].current?.focus();
    }
    if (getOTPNumberByIndex && event.keyCode === 8) {
      arrayOTP[index] = null;
      setOTP(arrayOTP);
    }
  };

  useEffect(() => {
    getOTP(otp);
  }, [otp, getOTP]);
  const renderInputOTP = () => {
    const otps = [...Array.from(Array(props.numberOTP || 6).keys())].map(
      (item) => {
        return (
          <Input
            key={item}
            type="number"
            ref={createRef[+item]}
            onKeyUp={(event: KeyboardEvent<HTMLInputElement>) =>
              keyUpHandler(event, item)
            }
            valueInput={otp[item] || ""}
            className={styles.input}
            onChange={(value) => changeValueHandler(value, item)}
          />
        );
      }
    );
    return otps;
  };
  return (
    <div className={`flex justify-center items-center ${styles.grid}`}>
      {renderInputOTP()}
    </div>
  );
};

export default InputOTP;
