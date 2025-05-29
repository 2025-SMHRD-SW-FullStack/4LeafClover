import React from 'react'

const Memberinfo = ({team,name}) => {
    return (
        <div id='box'>
            <div id='inner-box'>{team}</div>
            <div id='inner-box'>{name}</div>
        </div>
    )
}

export default Memberinfo