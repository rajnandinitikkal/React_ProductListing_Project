// import React from 'react';
import WatchImg from "../assets/carousels/electric.png";
import Cloths from "../assets/carousels/Cloths.png";
import Electronics from "../assets/carousels/Electronics.png";
import Ethinic from "../assets/carousels/Ethinic.png";
import FlowerPots from "../assets/carousels/flrPots.png";
import Jwellary from "../assets/carousels/Jwellary.png";
import Gadgets from "../assets/carousels/Gadgets.png";

import "../Styles/LandingPage.css";
import { useEffect, useState } from "react";

function LandingPage() {
  const images = [
    FlowerPots,
    WatchImg,
    Cloths,
    Electronics,
    Ethinic,
    Gadgets,
    Jwellary
  ];
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
    <div className="slider-container">
      <div className="slider-track" 
      style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) =>(
          <div className="slide" key={index}>
          <img
           src={img} 
           alt={`carousel - ${index}`} ></img>
           </div>
        ))}
      </div>
    </div>

    <div>
       <h2>Shop By Categories</h2>
    </div>

    <div>

    </div>

    </>
  )
}

export default LandingPage