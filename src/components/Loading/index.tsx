import { FC } from "react";
import { classNameProps } from "../../types/className";
import styles from "./styles.module.scss";

const Loading: FC<classNameProps> = (props) => {
  return (
    <div className="text-center">
      <div className={`${styles["lds-ellipsis"]} ${props.className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
