import React from "react";
import classes from "./Navigation.module.css";
function Navigation({ option, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${classes.Navigation} ${
        option.isActive ? classes.active : ""
      }`}
    >
      <span>{option.name}</span>
      <div className={classes.indicator}></div>
    </div>
  );
}

export default Navigation;
