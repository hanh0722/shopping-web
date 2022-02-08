import React, { FC } from "react";
import styles from './styles.module.scss';
import { classList } from "../../utils/classList";
import { LayoutTitleOTPProps } from "../../types/Register";
const LayoutTitleForm: FC<LayoutTitleOTPProps> = (props) => {
    return(
        <div className={classList(styles.layout, props.className)}>
            {props.title && <h4 className={styles.title}>{props.title}</h4>}
            {props.children}
        </div>
    )
}

export default LayoutTitleForm;