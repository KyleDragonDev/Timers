import React, { useEffect, useState } from "react";
import Timer from "./Timer Components/Timer";
import icons from '../icons/icons';

function GlobalTimer({ name, globalMinute, loop }) {
    const getTimeTo = () => {
        const date = new Date();
        const currentMin = date.getMinutes();
        const minutes = currentMin >= globalMinute ?
            loop - currentMin % globalMinute - 1 :
            globalMinute - currentMin - 1;
        const seconds  = 60 - date.getSeconds();
        return minutes * 60 + seconds;
    }    
    const [time, setTime] = useState(getTimeTo());

    useEffect(() => {
        if(time === 0) setTime(1800);
    }, [time]);

    return (
        <div className="timer">
            <img className='timer-icons' src={icons[name]} alt={name} />
            <Timer time={time} setTime={setTime} timerOn={true} />
        </div>
    )
}

export default GlobalTimer;
