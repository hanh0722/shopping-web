import { classNameProps } from "./className";

export interface ErrorNotifyProps extends classNameProps {
    message: string;
    error?: boolean;
    conditionActive?: boolean;
    timeOut?: number;
}