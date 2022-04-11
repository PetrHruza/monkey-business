import React from "react";
import ReactDOM from "react-dom";
import isometricHero from "./img/isometric-hero.png";
import testHero from "./img/unsplash.jpg";

import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero">
        <div className="hero-left">
            {/* <h1>finworld</h1> */}
        </div>
        <div className="hero-right">
          {/* <img src={testHero} alt="Hero Img" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
