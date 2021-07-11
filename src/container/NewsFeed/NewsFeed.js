import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios";
import classes from "./NewsFeed.module.css";
import { NEWS_API_KEY } from "../../common/common";
import {
  HomeNewsArticle,
  CategoryNewsArticle,
} from "../../component/NewsArticle/NewsArticle";

function NewsFeed({ activeOp, NavOptionObj }) {
  const [news, setNews] = useState([]);
  console.log("activeOp", activeOp, "NavOptionObj", NavOptionObj);
  let url = "";

  if (activeOp == 0) {
    url =
      "everything?q=Apple&from=2021-06-09&sortBy=popularity&apiKey=" +
      NEWS_API_KEY;
  } else {
    url =
      "top-headlines/sources?category=" +
      NavOptionObj[activeOp].name +
      "&apiKey=" +
      NEWS_API_KEY;
  }
  const getNewsArticles = () => {
    // axios
    // .get(
    //   "everything?q=Apple&from=2021-06-05&sortBy=popularity&apiKey=" +
    //     NEWS_API_KEY
    // )
    // axios
    //   .get("top-headlines/sources?category=sports&apiKey=" + NEWS_API_KEY)
    axios
      .get(url)
      .then((res) => {
        if (activeOp == 0) {
          console.log("news res", res.data.articles);
          setNews(res.data.articles);
        } else {
          console.log("sources", res.data.sources);
          setNews(res.data.sources);
        }
      })
      .then(() => {
        console.log("news", news);
      })
      .catch((err) => console.log("news err", err));
  };

  useEffect(() => {
    getNewsArticles();
  }, [activeOp]);

  if (news.length) {
    return (
      <div className={classes.NewsFeed}>
        {!activeOp &&
          news.map((news, index) => {
            return <HomeNewsArticle key={index} {...news} />;
          })}

        {activeOp &&
          news.map((news, index) => {
            return <CategoryNewsArticle key={index} {...news} />;
          })}
      </div>
    );
  } else {
    return "Oops!! No News ow";
  }
}

export default NewsFeed;
