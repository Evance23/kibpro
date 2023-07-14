import "./HeroStyles.css";


import React from "react";
import IntroImg from "../assets/210888.jpg"
// import { Link } from "react-router-dom";



const Hero = () => {
  return <div className="hero">
    <div className="mask">
      <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p style={{color:'whitesmoke'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
        </p>
        <h1 style={{color:'whitesmoke'}}>
Kibetech Solutions 
        </h1>
<div>
  
  <button className="button">Learn More</button>
</div>
      </div>
      </div>
};
export default Hero;