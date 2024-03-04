import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
     
      <a href=" https://blog.hubspot.com/website/website-development" target="_blank" rel="noopener noreferrer">  
      <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
