import React, { useState } from 'react'

const Board = ({user, name}) => {

  return (
    <div className='ba'>
      <h4>{name}</h4>
      <img style={{width: 100, height: 100}} src={user.imgPath}/>
      <div>
        <p>현재 점수는?</p>
        <p>{user.score}</p>
      </div>
    </div>
  )
}

export default Board