import React from "react";
import PickTool from "../img/logoferresmart.png";
import ChooseArea from "../img/logoferresmart.png";
import PickUpOrDelivery from "../img/logoferresmart.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickTool,
      title: "Pick Tool",
      text: "Lorem",
    },
    {
      image: ChooseArea,
      title: "Choose Area",
      text: "Lorem",
    },
    {
      image: PickUpOrDelivery,
      title: "To Pickup or Delivery?",
      text: "Lorem",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-subheading">How it Works</h1>
        <p classname="primary-text">cualquier cosa tambien
        </p>
      </div>
    <div className="work-section-bottom" >
      {
        workInfoData.map((data) =>(
          <div className="work-section-info" >
            <div className="info-boxes-img-container">
            <img src={"data.image"} alt=""/>
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          </div>
        ))
      }

    </div>
  </div> 
  );
};

export default Work;
