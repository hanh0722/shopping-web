import { LOGIN, REGISTER } from "../constants/routes"

export const isHiddenNavigation = (pathname: string) => {
    if (pathname === LOGIN || pathname === REGISTER) {
        return false;
    }
    return true;
}