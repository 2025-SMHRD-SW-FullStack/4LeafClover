import React from 'react'

const App2 = () => {
let name = prompt("너의 이름은?");

// 날짜 시간 관련 정보를 가진 객체
let today = new Date();

console.log(today);
console.log(today.toLocaleDateString()); //현지 시간 기준 날짜(년 월 일) 반환
console.log(today.getMonth()+1);
let month = today.getMonth()+1;
let result = "";
switch (month) {
    case 3:
    case 4:
    case 5:
        result = "봄";    
        break;
    case 6:
    case 7:
    case 8:
        result = "여름";    
        break;
    case 9:
    case 10:
    case 11:
        result = "가을";    
        break;
    case 12:
    case 1:
    case 2:
        result = "겨울";    
        break;
    default:
        break;
}

    return (
        <div>
            <h1>{today.toLocaleDateString()}</h1>
            <hr/>
            {name}님 지금은 {result}입니다. 좋은 하루 보내세요:)
        </div>
    )
}

export default App2