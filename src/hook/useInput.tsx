import { ChangeEvent, useEffect, useState } from "react";

const useInput = (initialValue?: string, cb?: (value: string) => boolean) => {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState(initialValue || '');
  const [inputIsTouch, setInputIsTouch] = useState(false);

  useEffect(() => {
    if (cb) {
      const inputIsValid = cb(value);
      setIsValid(inputIsValid);
    }
  }, [cb, value]);
  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onBlurHandler = () => {
    setInputIsTouch(true);
  };

  return {
    isValid,
    value,
    inputIsTouch,
    changeValueHandler,
    onBlurHandler
  };
};


export default useInput;