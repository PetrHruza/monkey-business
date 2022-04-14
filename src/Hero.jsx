import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero">
        <div className="hero-left">
          <h1>This is website</h1>
          <h2>headline</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            iste blanditiis amet velit, corrupti porro, facilis iure quae saepe
            labore nihil expedita animi aperiam error?
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Hero img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
