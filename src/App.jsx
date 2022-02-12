import React, { useEffect, useState } from "react";
import PlayerTimer from "./Timers/PlayerTimer";
import GameTimer from "./Timers/GameTimer";
import GlobalTimer from "./Timers/GlobalTimer";
import './App.css';

function App() {
    useEffect(() => {
        document.body.style = 'background: rgb(84,204,162); background: linear-gradient(90deg, rgba(84,204,162,1) 0%, rgba(84,172,167,1) 100%);'
    }, [])
    const [timersOn, setTimersOn] = useState(false);
    return(
        <div>
            <button id='active-btn' onClick={() => setTimersOn(!timersOn)} >{timersOn ? "I'm out" : "I'm back!"}<span className='active-btn-text'>Start/stop wealth clock and gingerbread house</span></button>
            <div className='category-titles'><strong>Christmas</strong></div>
            <div className='categories'>
                <PlayerTimer name={'Gingerbread house'} timersOn={timersOn} startingTime={7200} />
                <GlobalTimer name={'Puffshrooms'} globalMinute={15} loop={30} />
                <GameTimer name={'Beesmas Feast'} startingTime={5400} />
                <GameTimer name={'Stockings'} startingTime={3600} />
                <GameTimer name={'Honey Wreath'} startingTime={1800} />
                <GameTimer name={'Snowbear'} startingTime={5400} />
                <GameTimer name={'Samovar'} startingTime={21600} />
                <GameTimer name={'Honeyday Candles'} startingTime={14400} />
                <GameTimer name={"Gander at Onett's Lid Art"} startingTime={28800} />
                <GameTimer name={'Snow machine'} startingTime={72000} />
                <GameTimer name={'Winter Memory Match'} startingTime={14400} />
            </div>
            <div className='category-titles'><strong>Dispensers</strong></div>
            <div className='categories'>
                <PlayerTimer name={'Wealth Clock'} startingTime={3600} timersOn={timersOn} />
                <GameTimer name={'Coconut Dispenser'} startingTime={14400} />
                <GameTimer name={'Honey Dispenser'} startingTime={3600} />
                <GameTimer name={'Strawberry Dispenser'} startingTime={14400} />
                <GameTimer name={'Blueberry Dispenser'} startingTime={14400} />
                <GameTimer name={'Glue Dispenser'} startingTime={79200} />
                <GameTimer name={'Royal Jelly Dispenser'} startingTime={79200} />
                <GameTimer name={'Ant Pass Dispenser'} startingTime={7200} />
                <GameTimer name={'Treat Dispenser'} startingTime={3600} />
            </div>
            <div className='row-container'>
                <div className='side-container'>
                    <div className='category-titles'><strong>Map Events</strong></div>
                    <div className='categories'>
                        <GameTimer name={'Wind Shrine'} startingTime={3600} />
                        <GameTimer name={'Special Sprout'} startingTime={57600} />
                        <GameTimer name={'Mythic Meteor Shower'} startingTime={79200} />
                        <GameTimer name={'Honeystorm'} startingTime={14400} />
                    </div>
                </div>
                <div>
                    <div className='category-titles'><strong>Memory Matches</strong></div>
                    <div className='categories'>
                        <GameTimer name={'Extreme Memory Match'} startingTime={28800} />
                        <GameTimer name={'Night Memory Match'} startingTime={28800} />
                        <GameTimer name={'Mega Memory Match'} startingTime={14400} />
                        <GameTimer name={'Memory Match'} startingTime={7200} />
                    </div>
                </div>
            </div>
            <div className='row-container'>
                <div className='side-container'>
                    <div className='category-titles'><strong>Boosters</strong></div>
                    <div className='categories'>
                        <GameTimer name={'Mountain Top Field Booster'} startingTime={3600} />
                        <GameTimer name={'Blue Field Booster'} startingTime={3600} />
                        <GameTimer name={'Red Field Booster'} startingTime={3600} />
                    </div>
                </div>
                <div>
                    <div className='category-titles'><strong>Mobs</strong></div>
                    <div className='categories'>
                        <GameTimer name={'Spider'} startingTime={1800} />
                        <GameTimer name={'Werewolf'} startingTime={3600} />
                        <GameTimer name={'King Beetle'} startingTime={28800} />
                        <GameTimer name={'Commando Chick'} startingTime={1800} />
                    </div>
                </div>
            </div>
            <h2>The site is in very early stages. If you find any bugs or just want to give feedback, DM me on discord!</h2>
        </div>
    )
}

export default App;
