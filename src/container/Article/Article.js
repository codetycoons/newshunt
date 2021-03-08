import React from 'react'
import ArticleComp from '../../component/ArticleList/ArticleList'
import Aux from '../../Hoc/Aux'
import classes from './Article.module.css'
import Trending from '../Trending/Trending'
function Article(props) {
    return (
        <div className={`pad10 ${classes.flex}`}>
            <div >
                <ArticleComp news={props.news} />
            </div>
            <div className={`pad10 ${classes.flex_1}`}>
                <Trending />
            </div>
        </div>
    )
}

export default Article
