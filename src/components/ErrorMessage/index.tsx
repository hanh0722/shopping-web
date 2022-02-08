import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ErrorNotifyProps } from "../../types/Error";
import styles from "./styles.module.scss";
import { CSSTransition } from "react-transition-group";
const ErrorMessage: FC<ErrorNotifyProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { conditionActive, timeOut } = props;

  useEffect(() => {
    if (conditionActive) {
      setIsActive(true);
    }
  }, [conditionActive]);
  useEffect(() => {
    let timeout: number | null = null;
    if (isActive) {
      timeout = window.setTimeout(() => {
        setIsActive(false);
      }, timeOut || 5000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isActive, timeOut]);

  const removeActiveHandler = () => {
    setIsActive(false);
  };
  return (
    ReactDOM.createPortal(
    <>
      <CSSTransition
        in={isActive}
        timeout={500}
        unmountOnExit
        mountOnEnter
        classNames="scroll-left"
      >
        <div
          className={`${styles.box} ${
            props.error ? styles.error : styles.success
          }`}
        >
          <div
            onClick={removeActiveHandler}
            className={`flex justify-center items-center ${styles.close}`}
          >
            <i className="far fa-times"></i>
          </div>
          <p className="text-right">{props.message}</p>
        </div>
      </CSSTransition>
    </>, document.getElementById('message-event')!)
  );
};

export default ErrorMessage;
