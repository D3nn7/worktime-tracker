import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
        }
    }, [seconds]);

    useEffect(() => {
        if (minutes === 60) {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
        }
    }, [minutes]);

    const paddedSeconds = seconds.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedHours = hours.toString().padStart(2, "0");

    return (
        <div>
            <div>{`${paddedHours}:${paddedMinutes}:${paddedSeconds}`}</div>
        </div>
    );
};

export default Counter;
