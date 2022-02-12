import React, { useState, useEffect } from "react";
import Timer from "./Timer Components/Timer";
import useLocalStorage from '../CustomHooks/useLocalStorage';
import ResetTimerButton from './Timer Components/ResetTimerButton';
import icons from '../icons/icons';

function PlayerTimer({ name, startingTime, timersOn }) {
    const [time, setTime] = useLocalStorage(name, startingTime);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(timersOn);
    }, [timersOn]);

    useEffect(() => {
        if(time <= 0) {
            setActive(false);
            setTime(0);
        }
    }, [time, setTime]);

    const resetTimer = () => {
        setTime(startingTime);
        setActive(true);
    }

    return(
        <div className={`timer ${time === 0 ? 'zero-timer' : ''}`}>
            <img className='timer-icons' src={icons[name]} alt={name} />
            <Timer time={time} setTime={setTime} timerOn={active} />
            <ResetTimerButton onClick={resetTimer} />
        </div>
    )
}

export default PlayerTimer;
