import axios from '../../axios'
import React, { Component } from 'react'
// import axios from 'axios'
import classes from './Home.module.css'
import { NEWS_API_KEY } from '../../common/common'
import Article from '../Article/Article'


class Home extends Component {

    state = {
        news: [],
        isNewsSelected: true,
        isTrendSelected: false,
        isPopularSelected: false
    }

    getNewsArticles() {
        console.log("in did mount")
        axios.get('everything?q=Apple&from=2021-03-05&sortBy=popularity&apiKey=' + NEWS_API_KEY)
            .then(res => {
                console.log("news res", res)
                this.setState({ news: res.data.articles })
            })
            .catch(err => console.log("news err", err))
    }

    componentDidMount() {
        this.getNewsArticles()
        // this.setState({ isTrendSelected: true })
    }

    componentDidUpdate() {
        // this.getNewsArticles()
    }

    render() {

        return (
            <React.Fragment>
                <ul className={`flex_center marg_btm_10 ${classes.box_shadow} ${classes.menu}`}>
                    <li
                        onClick={() => this.setState({ isPopularSelected: false, isTrendSelected: false, isNewsSelected: true })}
                        className={`pad10 cursor ${this.state.isNewsSelected ? classes.menu_active : ''}`}>News</li>
                    {/* <li
                        onClick={() => this.setState({ isPopularSelected: false, isTrendSelected: true ,isNewsSelected: false})}
                        className={`pad10 cursor ${this.state.isTrendSelected ? classes.menu_active : ''}`}>Trending</li> */}
                    <li
                        onClick={() => this.setState({ isPopularSelected: true, isTrendSelected: false, isNewsSelected: false })}
                        className={`pad10 cursor ${this.state.isPopularSelected ? classes.menu_active : ''}`}>Popular</li>
                </ul>
                <div className="marg_btm_10">
                    <Article news={this.state.news} />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
