import React from "react";
import Navbar from "./Navbar";
import BannerImage from "../img/delivery.jpeg";
import BannerBackground from "../img/background.webp";
import { FiArrowRight } from "react-icons/fi";
//hola que tal?
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          "Herramientas para cada tarea, ¡Ferresmart entrega hola!
          </h1>
          <p className="primary-text">

          "Tu recurso principal para las mejores herramientas, consejos de expertos y convertir los sueños de bricolaje en realidad."          </p>
          <button className="secondary-button">
           ¡Compra ahora! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};


export default Home;
