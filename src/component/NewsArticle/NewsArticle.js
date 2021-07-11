import React from "react";
import classes from "./NewsArticle.module.css";
import { Link } from "react-router-dom";

export function HomeNewsArticle(props) {
  return (
    <Link
      to={{
        pathname: "/description",
        state: props,
      }}
    >
      <div className={classes.NewsArticle}>
        <img src={props.urlToImage} />
        <div className={classes.content}>
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  );
}

export function CategoryNewsArticle(props) {
  return (
    <Link
      to={{
        pathname: "/description",
        state: props,
      }}
    >
      <div className={classes.NewsArticle}>
        <img src={props.url} />
        <div className={classes.content}>
          <p>{props.name}</p>
        </div>
      </div>
    </Link>
  );
}

// export default NewsArticle;
