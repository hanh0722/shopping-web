import React, { FC } from "react";
import { classNameProps } from "../../../types/className";
import styles from './styles.module.scss';

const Grid: FC<classNameProps> = (props) => {
    return(
        <div className={`${styles.grid} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    )
}

export default Grid;