import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="brand">
          <h1>Monkey Business</h1>
      </div>
      <div className="navbar">
          <ul>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="www.google.com">Projects</a></li>
              <li><a href="www.google.com">Partners</a></li>
              <li><a href="www.google.com" className="contact-btn">Contact</a></li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
