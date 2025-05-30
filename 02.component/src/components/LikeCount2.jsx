import React, { useState } from 'react'

const LikeCount2 = () => {

    const [count,setCount] = useState(0);
    const [img,setImg]=useState("src/assets/img/icon_22.png");
    const upCount = () => {
        setCount(count+1);
        setImg("src/assets/img/icon_23.png");
    }

    const downCount = () => {
        setCount(count-1);
        if(count<=1){
            setCount(0);
            setImg("src/assets/img/icon_22.png");
        }
    }

    return (
        <div className='box'>
            <div>
            <img style={{width:180,height:180}}
            src={img} alt={"축하"} />
            </div>
            <div>
                좋아요{count}
            </div>
            <div>
                <button onClick={upCount}>💖</button>
                <button onClick={downCount}>💔</button>
            </div>
        </div>
    )
}

export default LikeCount2