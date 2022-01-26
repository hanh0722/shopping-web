import React, { FC } from "react";
import { ButtonProps } from "../../types/button";
import styles from "./styles.module.scss";

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      type={type || "button"}
      disabled={disabled || false}
      className={`bg-blue ${disabled ? styles.disabled : ''} ${styles.button} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
