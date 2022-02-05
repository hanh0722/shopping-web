import { FC } from "react";
import styles from "./styles.module.scss";
import { classList } from "../../utils/classList";
import useToggle from "../../hook/useToggle";
import { CheckboxProps } from "../../types/button";

const Checkbox: FC<CheckboxProps> = (props) => {
  const { isToggle, changeToggleHandler } = useToggle(false);

  const changeActiveHandler = () => {
    changeToggleHandler();
    props.onChangeChecked(!isToggle);
  }
  return (
    <div
      onClick={changeActiveHandler}
      className={classList(
        styles.checkbox,
        "flex",
        "justify-center",
        "items-center",
        'cursor-pointer',
        isToggle ? styles['is-checked'] : '',
        props.className
      )}
    >
      {isToggle && <i className="far fa-check"></i>}
      {props.children}
    </div>
  );
};

export default Checkbox;
