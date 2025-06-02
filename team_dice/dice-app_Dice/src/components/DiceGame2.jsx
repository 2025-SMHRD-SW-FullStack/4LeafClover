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

const DiceGame2 = () => {

  const imgPath = 'src/assets/img/img/dice'
  
  // let [name, name변경] = useState(["나", "com"]);
  // let [numscore, setnumscore] = useState(0);
  // let [diceimg, setdiceimg] = useState(`${imgPath}1.png`);

  const [user, setUser] = useState({imgPath:`${imgPath}1.png`, score:(0)})
  const [com, setcom] = useState({imgPath:`${imgPath}1.png`, score:(0)})

  // let [comscore, setcomscore] = useState(0);
  // let [comdiceimg, comsetdiceimg] = useState(`${imgPath}1.png`);

  //주사위 던지기 기능
  const throwDice = () => {
    let getnum = parseInt(Math.random() * 6) + 1;
    let getcom = parseInt(Math.random() * 6) + 1;

    let userScore = user.score;
    let comScore = com.score;

    //주사위 눈 생성
    // setdiceimg(`${imgPath}${getnum}.png`);
    
    // comsetdiceimg(`${imgPath}${getcom}.png`);
    
    //점수 측정
    if (getnum > getcom) {
      userScore += 1;
    } else if (getnum < getcom) {
      comScore += 1;
    } 

    // ...(전개연산자)
    // ex) let user = {imgPath:"~", score:0}
    //     console.log(...user);
    //     출력) imgPath:"~", score:0
    //     변경) imgPath:"새로운경로", score:0

    setUser({
      ...user,
      imgPath:`${imgPath}${getnum}.png`,
      score:userScore
    });
    setcom({
      ...com,
      imgPath:`${imgPath}${getcom}.png`,
      score:comScore
    })
  }

  if (user.score === 5) {
    alert("유저 Win");
  } else if (com.score === 5) {
    alert("Com Win");
  }

  //초기화 기능
  const initDice = () => {
    setUser({imgPath:`${imgPath}1.png`, score:(0)});
    setcom({imgPath:`${imgPath}1.png`, score:(0)});
  }
  

  return (
    <div className='main'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea user={user} com={com}/>
    </div>
  )
}

export default DiceGame2