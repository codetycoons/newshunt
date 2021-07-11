import React from "react";
import classes from "./Profile.module.css";
import profile from "../../asset/pf.png";
// const profile = require("../../../asset/profile.jpeg");
// const profile = import ("../../asset/pf.png");
function Profile() {
  return (
    <div className={classes.Profile}>
      <img src={profile} alt="profile" />
      <div className={classes.date}>July 4, 2021</div>
      <div className={classes.time}>7:07 pm</div>
    </div>
  );
}
export default Profile;
