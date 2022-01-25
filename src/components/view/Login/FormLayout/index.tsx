import React from "react";
import { Image } from "../../..";
import { FormLayoutProps } from "../../../../types/Register";
import styles from "./styles.module.scss";

const FormLayout: React.FC<FormLayoutProps> = (props) => {
  return (
    <form
      onSubmit={props.onSubmitHandler ? props.onSubmitHandler : undefined}
      className={`${styles.form} ${props.className ? props.className : ""}`}
    >
      <div className={`container ${styles.content}`}>
        {props.isAllowRollBack && <div className={`flex justify-center items-center ${styles.rollback}`}>
          <i className="far fa-angle-left"></i>
        </div>}
        {props.isShowLogo && <div className={styles.logo}>
          <Image src="/2228f38cf84d1b8451bb49e2c4537081.png" />
          <Image src="/61ff572362f08ead7f34ce410a4a6f96.png"/>
        </div>}
        {props.children}
      </div>
    </form>
  );
};

export default FormLayout;
