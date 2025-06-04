import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

export const DiceDisplay = ({ diceNumber }) => {
    const diceRef = useRef(null);

    useEffect(() => {
        anime({
            targets: diceRef.current,
            rotate: '+=1440',
            duration: 800,
            easing: 'easeOutExpo',
            scale: [
                { value: 1.3, duration: 100 },
                { value: 1, duration: 300 }
            ]
        });
    }, [diceNumber]);

    return (
        <div
            ref={diceRef}
            style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#f5f5f5',
                borderRadius: '16px',
                textAlign: 'center',
                lineHeight: '120px',
                fontSize: '48px',
                margin: '40px auto',
                border: '2px solid #ccc',
                userSelect: 'none'
            }}
        >
            🎲 {diceNumber}
        </div>
    );
};

export default DiceDisplay;