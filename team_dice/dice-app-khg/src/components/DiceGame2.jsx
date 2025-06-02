import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'


const DiceGame = () => {

  const imgPath = 'src/assets/img/dice';

  // const [userScore, setUserScore] = useState(0);
  // const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);

  
  
  // const [comScore, setComScore] = useState(0);
  // const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);
  
  const [user, setUser] = useState({imgPath: `${imgPath}1.png`, score:0});
  const [com, setCom] = useState({imgPath: `${imgPath}1.png`, score:0})


  //주사위 던지기 기능
  const throwDice = () => {
    //alert('던지기 실행');

    //주사위 눈 생성
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    //주사위 눈 이미지 초기화
    // setUserDiceImg(`${imgPath}${userIndex}.png`);
    setUser({
      ...user, 
      imgPath: `${imgPath}${userIndex}.png`
    });
    
    setCom({
      ...com,
      imgPath: `${imgPath}${comIndex}.png`
    })

    // setComDiceImg(`${imgPath}${comIndex}.png`);
    
    //실습) 주사위 눈 비교 -> 이긴 쪽 +1 증가
    if(userIndex == comIndex){
      alert("무승부!");
    } else if(userIndex > comIndex){
      setUser({...user, score: user.score+1});
    } else {
      setCom({...com, score: com.score+1});
    }

  }

  //초기화 기능
  const initDice = () => {
    alert('초기화 실행');
  }

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea user={user} com={com}/>
    </div>
  )
}

export default DiceGame