import React from "react";
import ProfilePic from "../img/istockphoto-1226886130-612x612.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div clasName="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">
          cualquier comentario puede ir aqui sobre la tienda
        </h1>
        <p className="primary-text"> otro comentario interesante</p>
      </div>
      <div clasName="testimonial-section-bottom" >
        <img src={ProfilePic} alt="" />
        <p>otro texto explicativo</p>
        <div clasName="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>Peter Simon</h2>
      </div> 
    </div>
  );
};

export default Testimonials;
