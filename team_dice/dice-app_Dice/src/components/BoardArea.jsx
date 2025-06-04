import React from 'react'
import Board from './Board'

const BoardArea = ({com, user}) => {
  return (
    <div className='b'>
        <Board name={"나"} user={user}/>
        <Board name={"com"} user={com}/>
    </div>
  )
}

export default BoardArea