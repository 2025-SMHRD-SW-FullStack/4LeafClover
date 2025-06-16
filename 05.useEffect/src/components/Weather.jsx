import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {
    let city = "Gwangju";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WHETHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let [temp,setTemp] = useState('');
    let [icon,setIcon] = useState('');
    let img = `https://openweathermap.org/img/wn/${icon}@2x.png`
    



    let day = new Date();
    const getWeatherData = async () => {

        let res = await axios.get(WHETHER_URL)
        let data = res.data

        console.log(data);
        setTemp(data.main.temp);
        console.log(temp);
        setIcon(data.weather[0].icon)


    // axios.get(WHETHER_URL)
    // .then((response)=>response.data)
    // .then((data)=>{
    //     console.log(data);
    //     setTemp(data.main.temp);
    //     console.log(temp);
    //     setIcon(data.weather[0].icon)

        
    
}

    useEffect(()=>{
        getWeatherData();
    },[])
    
    return (
        <div>
            <h1>{day.getFullYear()}년 {day.getMonth()+1}월 {day.getDate()}일 {day.getHours()}시 {day.getMinutes()}분</h1>
            <img src={img} alt="날씨 아이콘" />
            <p>현재 {city}은(는) {temp}°C입니다</p>
        </div>
    )
}

export default Weather