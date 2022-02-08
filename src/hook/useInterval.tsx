import { useEffect, useState } from "react";

const useInterval = (duration: number, millisecondsCounter: number, timeDecrease: number, initialValue?: boolean) => {
    const [isRunning, setIsRunning] = useState(initialValue || false);
    const [time, setTime] = useState(duration);

    useEffect(() => {
        if (!isRunning) {
            return;
        }
        const timeout = setInterval(() => {
            setTime(prevState => {
                return prevState - timeDecrease
            })
        }, millisecondsCounter);
        if (time === 0) {
            clearInterval(timeout);
        }
        return () => {
            clearInterval(timeout);
        }
    }, [millisecondsCounter, timeDecrease, isRunning, time]);

    const changeRunningHandler = (value: boolean) => {
        setIsRunning(value);
    };

    const changeTimeHandler = (time: number) => {
        setTime(time);
        setIsRunning(true);
    }

    return {
        changeRunningHandler,
        changeTimeHandler,
        time,
        isRunning
    }
}

export default useInterval;