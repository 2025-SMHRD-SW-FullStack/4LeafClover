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
            >
                던지기!
            </button>
            <button
                className='resetBtn'
                style={{ backgroundColor: '#e2384c', color: 'white' }}
                onClick={reset}
            >
                RESET
            </button>
        </div>
    );
};
export default ButtonArea