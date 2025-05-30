import React, { useEffect, useState } from 'react'

const BattleNumber = () => {
    /* 
    
    실습) 숫자 맞추기
    1. 버튼을 클릭했을때 랜덤한 숫자 생성하기(1~3)
        - parseInt(math.random() + 3) +1;
    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
        - 정답이면 "정답입니다"
        - 오답이면 "틀렸습니다"
        - 누른 버튼의 값 가져오는 방법 -> event 객체.target
    */
    const [myNum,setMyNum]=useState(0);
    const [comNum,setComNum]=useState(0);
    const [result,setResult]=useState("");
    const btnClick = (e)=>{
        
        setMyNum(e.target.value);
        setComNum(parseInt(Math.random()*3)+1);
        
    };
    useEffect(()=>{
        if(myNum!==0){
            if(myNum==comNum){
                setResult("정답입니다");
            }else{
                setResult("틀렸습니다");
            }

        }
    })

    
    
    return (
        <div>
            <div>
                <button onClick={btnClick} value={1}>1</button>
                <button onClick={btnClick} value={2}>2</button>
                <button onClick={btnClick} value={3}>3</button>
                </div>
            <div>
                내가 입력한 숫자 : {myNum} <br />
                랜덤한 숫자 : {comNum} <br />
                {result}
            </div>

        </div>
    )
}

export default BattleNumber