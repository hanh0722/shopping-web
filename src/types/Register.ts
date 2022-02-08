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

export interface RegisterProps {
    username: string;
    password: string;
    phone: string;
    email: string;
}

export interface RegisterFormProps extends classNameProps {
    registerHandler: (userData: RegisterProps) => void;
    isLoading?: boolean;
    error?: {
        [props: string]: string | number | any
    }
}

export interface LayoutTitleOTPProps extends classNameProps {
    title?: string
}
export interface RegisterOTPProps {
    email?: string | null,
    username?: string | null
}