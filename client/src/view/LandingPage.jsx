// import React from 'react';
import Accessories from "../assets/carousels/Accesaries.png";
import Cloths from "../assets/carousels/Cloths.png";
import Electronics from "../assets/carousels/Electronics.png";
import Ethinic from "../assets/carousels/Ethinic.png";
import FlowerPots from "../assets/carousels/flrPots.png";
import Jwellary from "../assets/carousels/Jwellary.png";
import Gadgets from "../assets/carousels/Gadgets.png";

import "../Styles/LandingPage.css";
// import CategoriesData from "../data/Categories.json";

function LandingPage(props) {
  // const categories = CategoriesData.find();
  return (
    <>
    <div className="carousel">
      <img src={FlowerPots} alt="landing-page" className='carousel_Image'></img>
    <img src={Accessories} alt="landing-page" className='carousel_Image'></img>
    <img src={Cloths} alt="landing-page" className='carousel_Image'></img>
    <img src={Electronics} alt="landing-page" className='carousel_Image'></img>
    <img src={Ethinic} alt="landing-page" className='carousel_Image'></img>
    <img src={Gadgets} alt="landing-page" className='carousel_Image'></img>
    <img src={Jwellary} alt="landing-page" className='carousel_Image'></img>
    </div>

    <div>
      {/* <h2>Categories</h2>
      <div>
        <img src={categories.imgUrl} alt={categories.name}></img>
        <p>{categories.name}</p>
      </div> */}


    </div>

    <div>

    </div>

    </>
  )
}

export default LandingPage