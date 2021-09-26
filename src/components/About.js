import React from "react";
import aboutimage from "../images/about.png";
import "../components/About.css";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolorum deserunt non veritatis inventore, repellat illum ex ullam,
          quasi voluptate, doloremque alias mollitia eaque doloribus!
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
