import React, { useState } from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary/ErrorBoundary";
import NavigationBar from "../NavigationBar/NavigationBar";
import classes from "./Layout.module.css";
import NewsFeed from "../NewsFeed/NewsFeed";
import Header from "../Header/Header";
import {
  TRENDING,
  NAVIGATION_OPTIONS_RESPONSE,
  navigationOptions,
} from "../../constant";
import { useFetch } from "../../Hooks/useFetch";
import { NEWS_API_KEY } from "../../common/common";

const SideBar = (props) => (
  <ErrorBoundary>
    <NavigationBar {...props} />
  </ErrorBoundary>
);

const FeedPage = (props) => (
  <ErrorBoundary>
    <NewsFeed {...props} />
  </ErrorBoundary>
);

function Layout() {
  const [navOptionObj, setNaviagtionOption] = useState(navigationOptions);
  const [activeOption, setActiveOption] = useState(1);
  let url = "";

  function toggleNavOption(index) {
    setNaviagtionOption(
      navOptionObj.map((op) => {
        op.id === index ? (op.isActive = !op.isActive) : (op.isActive = false);
        setActiveOption(index);
        return { ...op };
      })
    );
  }

  activeOption === TRENDING
    ? (url =
        "everything?q=Apple&from=2021-06-19&sortBy=popularity&apiKey=" +
        NEWS_API_KEY)
    : (url =
        "top-headlines/sources?category=" +
        navOptionObj[activeOption - 1].name +
        "&apiKey=" +
        NEWS_API_KEY);

  const { response, error, loading } = useFetch(url, "GET");

  return (
    <React.Fragment>
      <Header />
      <div className={classes.Layout}>
        <SideBar navOptionObj={navOptionObj} onClick={toggleNavOption} />
        <FeedPage
          activeOption={activeOption}
          isLoading={loading}
          response={response}
        />
      </div>
    </React.Fragment>
  );
}

export default Layout;
