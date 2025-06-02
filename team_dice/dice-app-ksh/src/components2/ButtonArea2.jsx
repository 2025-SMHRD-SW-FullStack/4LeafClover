import React from 'react';

const ButtonArea2 = ({ rollDice, reset }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center',gap:'20px', margin: '20px 0' }}>
            <button
                onClick={rollDice}
                style={{ border:'2px solid black', backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px' }}
            >
                굴리기
            </button>
            <button
                onClick={reset}
                style={{ border:'2px solid black', backgroundColor: '#f44336', color: 'white', padding: '10px 20px' }}
            >
                Reset
            </button>
        </div>
    );
};

export default ButtonArea2;
