import React from "react";
import { classNameProps } from "../../../../types/className";
import styles from './styles.module.scss';

const Layout: React.FC<classNameProps> = (props) => {
    return(
        <div className={`${styles.layout} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    )
}

export default Layout;