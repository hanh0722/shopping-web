import React, { KeyboardEvent } from "react";
import { classNameProps } from "./className";

export interface InputProps extends classNameProps {
    type?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    label?: string;
    id?: string;
    validate?: boolean,
    validateInput?: (value: string) => boolean,
    initialValue?: string,
    message?: string,
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
    ref?: React.Ref<HTMLInputElement>;
    valueInput?: string | number;
}

export interface InputOTPProps extends classNameProps {
    numberOTP?: number;
    getOTP: (otpArray: Array<string | null>) => void;
}