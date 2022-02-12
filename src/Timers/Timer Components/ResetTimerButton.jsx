import React from "react";
import logo from '../../icons/Reset.png';

const ResetTimerButton = ({ onClick }) => {
    return (
        <input type='image' className='reset-btn' src={logo} onClick={onClick} alt='Reset' />
    )
}

export default ResetTimerButton;
