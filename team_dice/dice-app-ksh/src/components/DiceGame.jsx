import React, { useState } from 'react';
import ButtonArea from './ButtonArea';
import BoardArea from './BoardArea';

export const DiceGame = () => {
    const [playerNum, setPlayerNum] = useState(1);
    const [comNum, setComNum] = useState(1);

    const [winCount, setWinCount] = useState(0);
    const [loseCount, setLoseCount] = useState(0);
    const [drawCount, setDrawCount] = useState(0);

    const [isRolling, setIsRolling] = useState(false);

    const rollDice = () => {
        setIsRolling(true); // 1초 동안 rolling 이미지 표시

        setTimeout(() => {
            const newPlayerNum = Math.floor(Math.random() * 6) + 1;
            const newComNum = Math.floor(Math.random() * 6) + 1;

            setPlayerNum(newPlayerNum);
            setComNum(newComNum);

            if (newPlayerNum > newComNum) {
                setWinCount(prev => prev + 1);
            } else if (newPlayerNum < newComNum) {
                setLoseCount(prev => prev + 1);
            } else {
                setDrawCount(prev => prev + 1);
            }
            setIsRolling(false);
        }, 1000);
    };

    const reset = () => {
        setPlayerNum(1);
        setComNum(1);
        setWinCount(0);
        setLoseCount(0);
        setDrawCount(0);
        setResult('');
        setIsRolling(false);
    };

    return (
        <div className='diceGame'>
            <h1 style={{marginTop:'1px'}} >주사위 게임</h1>
            <ButtonArea rollDice={rollDice} reset={reset} />
            <BoardArea
                playerNum={playerNum}
                comNum={comNum}
                isRolling={isRolling}  //상태값으로 전달
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <strong><p>승: {winCount} | 패: {loseCount} | 무: {drawCount}</p></strong>
            </div>
        </div>
    );
};

export default DiceGame;
