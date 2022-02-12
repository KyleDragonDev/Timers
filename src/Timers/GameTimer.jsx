import React, { useEffect, useState } from "react";
import Timer from "./Timer Components/Timer";
import ResetTimerButton from './Timer Components/ResetTimerButton';
import icons from '../icons/icons';

function GameTimer({ name, startingTime }) {
    const timeUntilEnd = () => {
        const endTime = localStorage.getItem(name);
        const timeToEnd = Math.floor((endTime - Date.now())/1000);
        return timeToEnd;
    }
    const [time, setTime] = useState(timeUntilEnd() || startingTime);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if(time <= 0) {
            setActive(false);
            setTime(0);
        }
    }, [time, setTime]);

    const resetTimer = () => {
        const endTime = Date.now() + startingTime*1000;
        localStorage.setItem(name, endTime);
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

export default GameTimer;
