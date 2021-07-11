import React, { useState, createContext } from "react";
import Navigation from "../../component/Navigation/Navigation";

import classes from "./NavigationBar.module.css";

function NavigationBar({ NavOptionObj, onClick }) {
  return (
    <div className={classes.NavigationBar}>
      {NavOptionObj.map((op, index) => {
        return (
          <Navigation key={index} option={op} onClick={() => onClick(index)} />
        );
      })}
    </div>
  );
}

export default NavigationBar;
