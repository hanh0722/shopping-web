import { ChangeEvent, FC, forwardRef } from "react";
import { InputProps } from "../../types/input";
import styles from "./styles.module.scss";
import useInput from "../../hook/useInput";
import { CSSTransition } from "react-transition-group";
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { changeValueHandler, inputIsTouch, isValid, onBlurHandler, value } =
      useInput(props.initialValue, (value: string) =>
        props.validate && props.validateInput
          ? props.validateInput(value)
          : false
      );

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      changeValueHandler(event);
      if (props.onChange) {
        props.onChange(event.target.value);
      }
    };
    return (
      <div
        className={`${styles.input} ${props.className ? props.className : ""}`}
      >
        {props.label && (
          <label className="pb-3" htmlFor={props.id}>
            {props.label}
          </label>
        )}
        <div className={styles['input-icon']}>
          <input
            ref={ref}
            className={!isValid && inputIsTouch && props.validateInput ? styles["input-error"] : ""}
            type={props.type || "text"}
            onChange={changeInputHandler}
            value={value}
            onBlur={onBlurHandler}
            placeholder={props.placeholder || ""}
          />
          {props.children}
        </div>
        {props.validate && props.message && (
          <CSSTransition
            in={inputIsTouch && !isValid}
            timeout={500}
            classNames="input-error"
            unmountOnExit
            mountOnEnter
          >
            <p className={`pt-3 ${styles.error}`}>{props.message}</p>
          </CSSTransition>
        )}
      </div>
    );
  }
);

export default Input;
