export interface InputProps {
    type?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    label?: string;
    className?: string,
    id?: string;
    validate?: boolean,
    validateInput?: (value: string) => boolean,
    initialValue?: string,
    message?: string
}