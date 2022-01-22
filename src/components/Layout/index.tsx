import React, { FC } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
const Layout: FC = (props) => {
    return(
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;