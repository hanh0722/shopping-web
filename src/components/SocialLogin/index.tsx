import { FC } from "react";
import { SocializeLoginProps } from "../../types/Register";
import styles from "./styles.module.scss";
const SocialLogin: FC<SocializeLoginProps> = (props) => {
  return (
    <div className={`flex justify-center align-center ${props.className ? props.className : ''} ${styles.buttons}`}>
      <div className="rounded-full google-login">
        <i className="fab fa-google"></i>
        {props.titleGoogle && <p>{props.titleGoogle}</p>}
      </div>
      <div className="rounded-full facebook-login">
        <i className="fab fa-facebook-f"></i>
        {props.titleFacebook && <p>{props.titleFacebook}</p>}
      </div>
      {props.children}
    </div>
  );
};

export default SocialLogin;
