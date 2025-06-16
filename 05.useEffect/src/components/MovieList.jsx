import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MovieList = () => {
    const [list,setList]=useState([]);
    let day = 20250610;
    let key = import.meta.env.VITE_MOVIE_API_KEY;
    let URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${day}`

    const getMovieList= async () => {
        let res = await axios.get(URL);
        let data= res.data;
        console.log(data);

        let movies = data.boxOfficeResult.dailyBoxOfficeList.map((item)=>({
            rank:item.rank,
            movieNm:item.movieNm,
            openDt:item.openDt
        }))

        console.log(movies);
        setList(movies);
        
        
        
        
    }   
    
    useEffect(()=>{
        getMovieList();
        
    },[])
    



    return (
        <div>
            <h1>영화목록</h1>
            <div>
                {list.map((movie,index)=>(
                    <p key={movie.rank}>{movie.rank}.{movie.movieNm}|{movie.openDt}</p>
                ))}
            </div>
        </div>
    )
}

export default MovieList