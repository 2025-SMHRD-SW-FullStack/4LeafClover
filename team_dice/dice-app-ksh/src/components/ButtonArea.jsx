<<<<<<< HEAD
import React from 'react';

const ButtonArea = ({ rollDice, reset }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center',gap:'20px', margin: '20px 0' }}>
            <button
                onClick={rollDice}
                style={{ border:'2px solid black', backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px' }}
=======
import React, { useEffect, useState } from 'react'

export const ButtonArea = () => {
    const [count, setCount] = useState(0);
    
    const upCount = () => {
        console.log(count);
        setCount(count + 1);
    };
    
    const reset = () => {
        console.log(count);
        setCount(0);
    };

    return (
        <div>
            <button
                className='throwBtn'
                style={{ backgroundColor: '#757881', color: 'white' }}
                onClick={upCount}
>>>>>>> 097607f55283bbd136b31b504ae0ef2ca93a9693
            >
                던지기!
            </button>
            <button
<<<<<<< HEAD
                onClick={reset}
                style={{ border:'2px solid black', backgroundColor: '#e53935', color: 'white', padding: '10px 20px' }}
=======
                className='resetBtn'
                style={{ backgroundColor: '#e2384c', color: 'white' }}
                onClick={reset}
>>>>>>> 097607f55283bbd136b31b504ae0ef2ca93a9693
            >
                RESET
            </button>
        </div>
    );
};
<<<<<<< HEAD

export default ButtonArea;
=======
export default ButtonArea
>>>>>>> 097607f55283bbd136b31b504ae0ef2ca93a9693
