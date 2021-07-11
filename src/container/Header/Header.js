import React from "react";
import Profile from "../Profile/Profile";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Header}>
      <h2>NEWSPOINT</h2>
      <div>
        <input type="text" placeholder="Search for articles" />
      </div>
      <Profile />
    </div>
  );
}

export default Header;
