import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import TrendingNews from '../../component/TrendingNews/TrendingNews'

function Trending() {
    const [news,setTrendNews] = useState([])
    useEffect(()=>{
        axios.get('top-headlines?country=us&apiKey=89bae09c95994204a3dd1fcc9ea80eac')
        .then((res)=>{
            console.log("trrending post",res)
            setTrendNews(res.data.articles)
        })
        .catch((err)=>{
            console.log("error of trend post",err)
        })
    },[])
    return (
        <div>
            <TrendingNews news={news}/>
        </div>
    )
}

export default Trending
