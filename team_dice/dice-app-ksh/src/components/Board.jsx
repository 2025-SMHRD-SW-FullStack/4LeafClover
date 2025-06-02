import React from 'react';

const Board = ({ title, num, isRolling }) => {
    const displayImage = isRolling ? '/src/assets/img/dice0.png' : `/src/assets/img/dice${num}.png`;
    const imageClass = isRolling ? 'rolling' : '';

    return (
        <div>
            <h3>{title}</h3>
            <img
                src={displayImage}
                className={imageClass}
                width="100"
            />
            
        </div>
    );
};
export default Board;