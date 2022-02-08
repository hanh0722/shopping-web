import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.scss";
import { OverlayProps } from "../../types/components/Overlay";
import { classList } from "../../utils/classList";

const Overlay: FC<OverlayProps> = (props) => {
  const [isOpenOverlay, setIsOpenOverlay] = useState(
    props.initialValue || false
  );
  const removeOverlayHandler = () => {
    setIsOpenOverlay(false);
  };
  useEffect(() => {
    setIsOpenOverlay(props.conditionActive);
  }, [props.conditionActive]);
  return ReactDOM.createPortal(
    <>
      <CSSTransition
        classNames={props.classNameAnimation || "scroll-back"}
        unmountOnExit
        mountOnEnter
        in={isOpenOverlay}
        timeout={500}
      >
        <>
          {props.children}
          <div
            className={classList(styles.overlay, props.className)}
            style={{ ...props.style }}
            onClick={props.isClickOutSide ? removeOverlayHandler : undefined}
          ></div>
        </>
      </CSSTransition>
    </>,
    document.getElementById("data-overlay")!
  );
};

export default Overlay;
