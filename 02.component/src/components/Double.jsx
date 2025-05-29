import React from 'react'

const Double = () => {
    const [count, setCount] = React.useState(0);
    const increase = () => {
        setCount(count + 1);
        console.log(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
        console.log(count - 1);
    }
    const reset = () => {
        setCount(0);
        console.log(0);
    }
    const increaseTen = () => {
        setCount(count + 10);
        console.log(count + 10);
    }
    const decreaseTen = () => {
        setCount(count - 10);
        console.log(count - 10);
    }

    return (
        <div >
            <div>
                <p>일반변수 : {count}</p>
                <button onClick={increase}>증가</button>
                <button onClick={increaseTen}>10증가</button>
                <hr />
                <button onClick={decrease}>감소</button>
                <button onClick={decreaseTen}>10감소</button>
                <hr />
                <button onClick={reset}>초기화</button>
                <hr />
                <button onClick={() => setCount(100)}>100으로 설정</button>
            </div>
        </div>
    )
}

export default Double