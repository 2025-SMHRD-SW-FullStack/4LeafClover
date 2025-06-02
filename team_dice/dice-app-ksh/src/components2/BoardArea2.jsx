import React from 'react';
import Board2 from './Board2';

const BoardArea2 = ({ playerNum, comNum, isRolling }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <Board2 title="나" num={playerNum}  isRolling={isRolling} />
            <Board2 title="컴퓨터" num={comNum}  isRolling={isRolling} />
        </div>
    );
};

export default BoardArea2;