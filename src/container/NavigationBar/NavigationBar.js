import React, { useState, createContext } from "react";
import Navigation from "../../component/Navigation/Navigation";

import classes from "./NavigationBar.module.css";

function NavigationBar({ navOptionObj, onClick }) {
  return (
    <div className={classes.NavigationBar}>
      {navOptionObj.map((op, index) => {
        return (
          <Navigation key={index} option={op} onClick={() => onClick(op.id)} />
        );
      })}
    </div>
  );
}

export default NavigationBar;
