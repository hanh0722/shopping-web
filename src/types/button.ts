import { classNameProps } from "./className";

export interface ButtonProps extends classNameProps {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit'
}