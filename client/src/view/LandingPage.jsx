
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
    <div classNmae="navCategoryNameSection">
      <ul>
      <li className="sectionsInLandingPage">Women</li>
      <li className="sectionsInLandingPage">Men</li>
      <li className="sectionsInLandingPage">Jwellary</li>
      <li className="sectionsInLandingPage">Home & Kitchen</li>
      <li className="sectionsInLandingPage">Fashion</li>
      <li className="sectionsInLandingPage">Beauty</li>
      <li className="sectionsInLandingPage">Accessories</li>
      <li className="sectionsInLandingPage">Mobile & Tablets</li>
      <li className="sectionsInLandingPage">Bags & Footwear</li>
      <li className="sectionsInLandingPage">Kids</li>
      <li className="sectionsInLandingPage">Office wear</li>
      </ul>
    </div>

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
       <h2 className="categorynameHeading">Shop By Categories</h2>


    <div className="shopByCategory">
      <div>
        <img src={Cloths} alt="Cloths" className="categoryImage"/>
          <p className="categoryname">Cloths</p>
      </div>
      <div>
        <img src={Electronics} alt="Electronics" className="categoryImage"/> 
          <p className="categoryname">Electronics</p>
      </div>
      <div>
        <img src={Ethinic} alt="Ethinic" className="categoryImage"/>
          <p className="categoryname">Electronics</p>
      </div>
      <div>
        <img src={FlowerPots} alt="FlowerPots" className="categoryImage"/>
          <p className="categoryname">  Electronics</p>
      </div>
      <div>
        <img src={Gadgets} alt="Gadgets" className="categoryImage"/>
          <p className="categoryname">Electronics</p>
      </div>
      <div>
        <img src={Jwellary} alt="Jwellary" className="categoryImage"/>
          <p className="categoryname">Electronics</p>
      </div>
      <div>
        <img src={WatchImg} alt="WatchImg" className="categoryImage"/>
          <p className="categoryname">Electronics</p>
      </div>

      </div>
    </div>

    <div>

    </div>

    </>
  )
}

export default LandingPage