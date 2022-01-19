import React, { FC } from "react";

const Layout: FC = (props) => {
    return(
        <div>
            Layout Component
            {props.children}
        </div>
    )
}

export default Layout;