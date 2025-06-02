<<<<<<< HEAD
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
=======
import React from 'react'
import Board from './Board'

const BoardArea = () => {
    return (
        <div>
            <Board></Board>
            <Board></Board>
        </div>
    )
}

export default BoardArea
>>>>>>> 097607f55283bbd136b31b504ae0ef2ca93a9693
