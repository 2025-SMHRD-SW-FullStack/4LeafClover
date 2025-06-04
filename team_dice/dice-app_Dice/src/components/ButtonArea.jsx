import React, { useState } from 'react'
import BoardArea from './BoardArea'

const ButtonArea = ({throwDice, initDice}) => {
  return (
    <div className='btn'>
        <button onClick={ () => throwDice()}>던지기!</button>
        <button className='re' onClick={ () => initDice() }>Reset</button>
        {/* <p>{num}</p>
        <p>{com}</p>
        <p>{승리}</p> */}
    </div>
  )
}

export default ButtonArea