import React, { useState } from "react";
import ErrorBoundary from "../../Hoc/ErrorBoundary/ErrorBoundary";
import NavigationBar from "../NavigationBar/NavigationBar";
import classes from "./Layout.module.css";
import NewsFeed from "../NewsFeed/NewsFeed";
import Header from "../Header/Header";

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

let NavOptions = [
  // {
  //   name: "Home",
  //   isActive: true,
  // },
  {
    name: "Trending",
    isActive: true,
  },
  {
    name: "Entertainment",
    isActive: false,
  },
  {
    name: "Business",
    isActive: false,
  },
  {
    name: "Sports",
    isActive: false,
  },
  {
    name: "Health",
    isActive: false,
  },
  {
    name: "Science",
    isActive: false,
  },
  {
    name: "Technology",
    isActive: false,
  },
];

function Layout() {
  const [NavOptionObj, setOption] = useState(NavOptions);
  const [activeOp, setActiveOption] = useState(0);

  function toggleNavOption(index) {
    console.log("index", index);
    let newOp = [...NavOptionObj];
    for (var key in newOp) {
      if (newOp[key].isActive) {
        newOp[key].isActive = false;
      }
    }
    newOp[index].isActive = true;
    setActiveOption(index);
    setOption(newOp);
  }
  return (
    <React.Fragment>
      <Header />
      <div className={classes.Layout}>
        <SideBar NavOptionObj={NavOptionObj} onClick={toggleNavOption} />
        <FeedPage activeOp={activeOp} NavOptionObj={NavOptionObj} />
      </div>
    </React.Fragment>
  );
}

export default Layout;
