import { useState } from "react";

const useToggle = (initialValue?: boolean) => {
    const [isToggle, setIsToggle] = useState(initialValue || false);

    const changeToggleHandler = () => {
        setIsToggle((prevState: boolean) => {
            return !prevState
        })
    }

    const setToggleHandler = (value: boolean) => {
        setIsToggle(value);
    }

    return {
        setToggleHandler,
        changeToggleHandler,
        isToggle,
    }
}

export default useToggle;