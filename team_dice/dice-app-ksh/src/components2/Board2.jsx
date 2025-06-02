import React from 'react';

const Board2 = ({ title, num, isRolling }) => {
    const displayImage = isRolling ? '/src/assets/img/dice0.png' : `/src/assets/img/dice${num}.png`;
    const imageClass = isRolling ? 'rolling' : '';

    return (
        <div>
            <h3>{title}</h3>
            <div className="wrapper">
                <div className="cube">
                    <div className="one">1</div>
                    <div className="two">2</div>
                    <div className="three">3</div>
                    <div className="four">4</div>
                    <div className="five">5</div>
                    <div className="six">6</div>
                </div>
            </div>

        </div>
    );
};
export default Board2;