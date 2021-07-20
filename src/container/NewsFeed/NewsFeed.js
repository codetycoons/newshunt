import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios";
import classes from "./NewsFeed.module.css";
import { NEWS_API_KEY } from "../../common/common";
import {
  HomeNewsArticle,
  CategoryNewsArticle,
} from "../../component/NewsArticle/NewsArticle";
import * as navigationOption from "../../constant";
import { useFetch } from "../../Hooks/useFetch";
import { NAVIGATION_OPTIONS_RESPONSE, TRENDING } from "../../constant";
import WithLoading from "../../Hoc/LoadingHoc";

function NewsFeed({ activeOption, response, isLoading }) {
  const news =
    response[
      NAVIGATION_OPTIONS_RESPONSE[
        activeOption === TRENDING
          ? response.articles
            ? "TRENDING"
            : "OTHERS"
          : response.sources
          ? "OTHERS"
          : "TRENDING"
      ]
    ];

  return (
    <div className={classes.NewsFeed}>
      {activeOption === navigationOption.TRENDING &&
        !isLoading &&
        news.map((news, index) => {
          return <HomeNewsArticle key={index} {...news} />;
        })}

      {activeOption &&
        !isLoading &&
        news.map((news, index) => {
          return <CategoryNewsArticle key={index} {...news} />;
        })}
    </div>
  );
}

export default WithLoading(NewsFeed);
