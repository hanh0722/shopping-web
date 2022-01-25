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
    message?: string
}