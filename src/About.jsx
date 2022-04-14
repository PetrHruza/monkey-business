import React from "react";

import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-img">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="About img"
        />
      </div>
      <div className="about-content">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores
          earum nulla eaque nihil tenetur ab accusantium architecto rem possimus
          excepturi voluptate, alias molestiae voluptates reprehenderit aliquid
          voluptas distinctio perferendis sequi quae! Ducimus explicabo
          veritatis quas sit ratione quidem quibusdam expedita maiores minima
          illum? Facilis perferendis ipsam eos repellat aut!
        </p>
      </div>
    </div>
  );
};

export default About;
