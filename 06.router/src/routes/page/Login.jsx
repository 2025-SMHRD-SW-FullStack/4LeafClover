import React from 'react'
import { useNavigate } from 'react-router'

const Login = ({setAuthenticate}) => {

    const nav = useNavigate();

    const goToHome=()=>{
        setAuthenticate(true);
        nav("/");
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <button onClick={goToHome}>로그인</button>
        </div>
    )
}

export default Login