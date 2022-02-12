import React, { useEffect } from "react";

function Timer({ time, setTime, timerOn }) {
    
    useEffect(() => {
        let timer;
        if(timerOn){
            timer = setInterval(() => {
                setTime(currentTime => currentTime - 1);
            }, 1000)
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [timerOn, setTime]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60 % 60);
    const seconds = time % 60;

    return(
        <div className='time'>
            <span>{`0${hours}`.slice(-2)}:</span>
            <span>{`0${minutes}`.slice(-2)}:</span>
            <span>{`0${seconds}`.slice(-2)}</span>
        </div>
    )
}

export default Timer;
