import { FormEvent } from "react";
import { classNameProps } from "./className";

export interface FormLayoutProps {
    onSubmitHandler?: (event: FormEvent) => void;
    isShowLogo?: boolean;
    className?: string
    isAllowRollBack?: boolean
}

export interface SocializeLoginProps extends classNameProps {
    titleGoogle?: string;
    titleFacebook?: string;
}

export interface LayoutProps extends classNameProps {
    title?: string
}