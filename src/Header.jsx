import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
          <h1>Monkey Business</h1>
      </div>
      <div className="navbar">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#" className="contact-btn">Contact</a></li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
