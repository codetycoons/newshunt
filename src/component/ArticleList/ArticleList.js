import React from 'react'
import Aux from '../../Hoc/Aux'
import classes from './ArticleList.module.css'
function Article(props) {
    console.log("article props", props)
    let articleList = []
    if (props.news.length) {
        articleList = props.news.map((art, index) => (
            <div key={index} className={`marg_btm_10 ${classes.pos_relative}`}>
                <img src={art.urlToImage} />
                <div className={classes.abs_box}>
                    <p>{art.title}</p>
                    <div>
                        {art.content.split('').splice(0,200).join('')}...<a>Read more</a>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <Aux>
            {articleList}
        </Aux>
    )
}

export default Article
