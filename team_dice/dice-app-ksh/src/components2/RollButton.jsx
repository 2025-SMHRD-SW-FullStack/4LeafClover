import React from 'react';

export const RollButton = ({ onRoll }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button
                onClick={onRoll}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
            >
                주사위 굴리기
            </button>
        </div>
    );
};

export default RollButton;
