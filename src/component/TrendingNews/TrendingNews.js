import React from 'react'
import classes from './TrendingNews.module.css'
function TrendingNews(props) {
    console.log("trending post ", props)
    let trendNews = ''
    if (props.news.length) {
        trendNews = props.news.map((news, index) => (
            <div key={index} className={`marg_btm_10 ${classes.flex} ${classes.news_card}`}>
                <div className="marg_right_10">
                    <img src={news.urlToImage} style={{ width: '150px', height: '100px' }} />
                </div>
                <div>
                    <h5>{news.title}</h5>
                </div>
            </div>
        ))
    }
    // return trendNews
    return (
        <div>
            <h1 className={`${classes.tagline} pad10`}>Trending Post</h1>
            {trendNews}
        </div>
    )
}

export default TrendingNews
