import React, { useEffect, useState } from 'react'

const ChamChamCham = () => {
    /**
   * 실습) 참참참 게임
   * 1. 사용자는 공격, 컴퓨터는 수비
   * 2. '좌','정면','우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다
   * - 같은 선택일 경우 사용자의 승리!
   * - 다른 선택일 경우 컴퓨터의 승리!
   * 3. 승리에 대한 결과를 화면에 출력합니다
   * 
   * * '좌' '정면' '우' 값은 배열로 만들어서 활용할 것
   * * 사용자, 컴퓨터, 결과값 총 3개의 state 생성할 것
   */
    const hand = ['좌','정면','우']
    const [user,setUser] = useState('');
    const [pc,setPc]=useState('');
    const [result,setResult]=useState(null);

    const handleCheck=(num)=>{
        let random = Math.floor(Math.random()*3);
        
        setUser(hand[num]);
        setPc(hand[random]);
        if(num==random){
            setResult('승리')
        }else{
            setResult('패배')
        }
    }
    
    useEffect(()=>{
        if(user===pc){
            setResult('승리')
        }else{
            setResult('패배')
        }
    },[user,pc])

    return (
        <div>
            <h1>참참참 게임!</h1>
            <p>나의 선택 :{user}</p>
            <p>컴퓨터의 선택 :{pc}</p>
            {result && <p>게임 결과 : {result}</p>}
            <button onClick={()=>handleCheck(0)}>좌</button>
            <button onClick={()=>handleCheck(1)}>정면</button>
            <button onClick={()=>handleCheck(2)}>우</button>
        </div>
    )
}

export default ChamChamCham