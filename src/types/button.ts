import { classNameProps } from "./className";

export interface ButtonProps extends classNameProps {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit'
}

export interface CheckboxProps extends classNameProps {
    onChangeChecked: (value: boolean) => void;
}