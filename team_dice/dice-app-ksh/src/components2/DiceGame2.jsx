import React, { useEffect, useRef ,useState} from 'react';
import DiceDisplay from './DiceDisplay';
import RollButton from './RollButton';
export const DiceGame2 = () => {
    const [diceNumber, setDiceNumber] = useState(1);

    const handleRoll = () => {
        const randomNum = Math.floor(Math.random() * 6 + 1);
        setDiceNumber(randomNum);
    };

    return (
        <div>
            <DiceDisplay diceNumber={diceNumber} />
            <RollButton onRoll={handleRoll} />
        </div>
    );
};

export default DiceGame2;
