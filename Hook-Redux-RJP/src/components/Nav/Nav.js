import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h2>React routing</h2>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/">AddTodo </Link>

        <Link to="/timer">Timer </Link>
        <Link to="/ref">Ref</Link>
        <Link to="/refdom">RefDom </Link>
        <Link to="/reducer">Reducer </Link>
        <Link to="/redux">Redux </Link>
        
      </div>
    </div>
  );
}

export default Nav;

               
               