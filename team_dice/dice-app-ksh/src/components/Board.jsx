<<<<<<< HEAD
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
=======
import React from 'react'

export const Board = () => {
    return (
        <div>
            <h4>나</h4>
            {/* <img src="" alt="" /> */}
            <div>
                <p>현재점수는 ?</p>
                <p>0</p>

            </div>
        </div>
    )
}
export default Board
>>>>>>> 097607f55283bbd136b31b504ae0ef2ca93a9693
