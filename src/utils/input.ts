import { REGEX_PASSWORD } from "../constants/regex";

export const isValidLength = (value: string, length: number) => {
    if (value.trim().length >= length) {
        return true;
    }
    return false;
}

export const isValidPassword = (value: string) => {
    const passwordIsValid = value.match(REGEX_PASSWORD);
    return !!passwordIsValid;
}

export const isValidEmail = (value: string) => {
    return value.trim().includes('@');
}

export const isValidPhone = (value: string) => {
    const trimValue = value.trim();
    if (trimValue.length < 10 || trimValue.length > 11){
        return false;
    }
    if (+trimValue.charAt(0) !== 0) {
        return false;
    }
    return true;
}