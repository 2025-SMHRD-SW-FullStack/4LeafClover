import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'

/* 
  1. 사용자 "던지기" 버튼을 눌렀을 때 랜덤으로 숫자가 생성된다 (1~6)

  2. 생성된 숫자로 주사위 눈 이미지를 화면에 출력된다

  3. 사용자와 컴퓨터의 주사위 눈을 비교한다
   - 사용자가 이겼을 경우 : 사용자의 스코어 + 1
   - 컴퓨터가 이겼을 경우 : 컴퓨터의 스코어 + 1

  4. "초기화" 버튼을 눌렀을 때 스코어와 주사위 눈이 초기설정값으로 바뀐다
   - 주사위 눈 : 1
   - 스코어 : 0
*/

const DiceGame = () => {

  const imgPath = 'src/assets/img/img/dice'
  
  let [name, name변경] = useState(["나", "com"]);

  let [numscore, setnumscore] = useState(0);
  let [diceimg, setdiceimg] = useState(`${imgPath}1.png`);

  let [comscore, setcomscore] = useState(0);
  let [comdiceimg, comsetdiceimg] = useState(`${imgPath}1.png`);

  //주사위 던지기 기능
  const throwDice = () => {
    let getnum = parseInt(Math.random() * 6) + 1;
    let getcom = parseInt(Math.random() * 6) + 1;

    //주사위 눈 생성
    setdiceimg(`${imgPath}${getnum}.png`);
    comsetdiceimg(`${imgPath}${getcom}.png`);
    
    //점수 측정
    if (getnum > getcom) {
      setnumscore(numscore + 1);
    } else if (getnum < getcom) {
      setcomscore(comscore + 1);
    } 
  }

  if (numscore === 5) {
    alert("게임이 종료되었습니다 당신의 승리입니다");
  } else if (comscore === 5) {
    alert("게임이 종료되었습니다 당신의 패배입니다");
  }

  //초기화 기능
  const initDice = () => {
    alert('초기화 실행');
  }
  

  return (
    <div className='main'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} ininDice={initDice}/>
        <BoardArea diceimg={diceimg} comdiceimg={comdiceimg} numscore={numscore} comscore={comscore} name={name[0]} comname={name[1]}/>
    </div>
  )
}

export default DiceGame