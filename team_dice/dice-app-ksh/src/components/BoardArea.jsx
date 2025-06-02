import React from 'react';
import Board from './Board';

const BoardArea = ({ playerNum, comNum, isRolling }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <Board title="나" num={playerNum}  isRolling={isRolling} />
            <Board title="컴퓨터" num={comNum}  isRolling={isRolling} />
        </div>
    );
};

export default BoardArea;
