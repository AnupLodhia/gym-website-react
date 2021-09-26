import React from "react";
import "../components/Header.css";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          expedita?
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            JOIN US
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
