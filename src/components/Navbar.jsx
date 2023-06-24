import React from "react";
import style from "./Navbar.module.css";
import "../App.css";

const Navbar = () => {
  return (
    <div id={style.Navbar} className={style.animation}>
      <center>
        <h1>Chuck Norries</h1>
      </center>
    </div>
  );
};

export default Navbar;
