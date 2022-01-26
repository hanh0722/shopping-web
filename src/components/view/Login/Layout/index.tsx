import React from "react";
import { LayoutProps } from "../../../../types/Register";
import styles from './styles.module.scss';

const Layout: React.FC<LayoutProps> = (props) => {
    return(
        <div className={`${styles.layout} ${props.className ? props.className : ''}`}>
            {props.title && <h3>{props.title}</h3>}
            {props.children}
        </div>
    )
}

export default Layout;