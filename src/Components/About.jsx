import React from 'react';
import AboutBackground from "/Users/pabloledezma/Desktop/ProyectoFs/front/src/img/background.webp";
import AboutBackgroundImage from "/Users/pabloledezma/Desktop/ProyectoFs/front/src/img/tools.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return  <div className="about-section-container" >
    <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
        <p className="primary-subheading" >About</p>
        <h1 className="primary-heading">
            Tu Ferreteria Inteligente
        </h1>
        <p className="primary-text">ALGUNA COSA INTERESANte</p>
        <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
            {" "}
            <BsFillPlayCircleFill/>Whatch Video</button>
        </div>
    </div>

  </div>;

};

export default About;