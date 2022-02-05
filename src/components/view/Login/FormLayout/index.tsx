import React from "react";
import { Image } from "../../..";
import { Link } from "react-router-dom";
import { FormLayoutProps } from "../../../../types/Register";
import styles from "./styles.module.scss";
import { HOME_PAGE } from "../../../../constants/routes";
import { classList } from "../../../../utils/classList";

const FormLayout: React.FC<FormLayoutProps> = (props) => {
  return (
    <form
      onSubmit={props.onSubmitHandler ? props.onSubmitHandler : undefined}
      className={classList(styles.form, props.className)}
    >
      <div className={`container ${styles.content}`}>
        {props.isAllowRollBack && <Link to={HOME_PAGE}><div className={`flex justify-center items-center ${styles.rollback}`}>
          <i className="far fa-angle-left"></i>
        </div></Link>}
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
