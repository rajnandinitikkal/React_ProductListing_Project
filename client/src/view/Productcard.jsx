// import axios from "axios";
// import React, { useEffect, useState } from "react";
import "../Styles/Productcard.css";
import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import { useNavigate } from "react-router-dom";

function Productcard() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/getProducts")
  //     .then((products) => setProducts(products.data))
  //     .catch((err) => console.log(err));
  // }, []);


  /////// This is used for fetching JSON data //////
    const [products, setProducts] = useState([]);
    useEffect(() => {
      setProducts(productsData);
    }, []);
  
    const navigate = useNavigate(); 
    const handleClick = (productId) =>{
      navigate(`/product/${productId}`);
    };
   

  return (
    <>
     
      {
        ////////// This is for fetching JSON data ///////
        products.map(product => (
          <div key={product.id} className="productCard" 
          onClick={handleClick(product.id)}>
            <div className="ImageURL">
            <img src={product.imgUrl} alt={product.name}></img>
          </div>
          <div className="product-info">
              <p> {product.name}</p>
              <p> {product.price}</p>
          </div>
          </div>
        ))
 
      }

 {
      //// This is for props ////
      
      /* <div className="MainCard">
        <div class="productCard">
          <div class="ImageURL">
            <img src={props.imgUrl} alt={props.name}></img>
          </div>
          <div class="product-info">
            <p> {props.name}</p>
            <p> {props.price}</p>
          </div>
        </div>
      </div> */}


      {
      
      ///// This is used for mongoDB fetching data /////
      
      /* {
      products.map(product => (
        <div key={product._id} className="productCard">
          <div className="ImageURL">
            <img src={product.imgUrl} alt={product.name}></img>
          </div>
          <div className="product-info">
              <p> {product.name}</p>
              <p> {product.price}</p>
          </div>
        </div>
      )) 
    } */}
      
    </>
  );
}

export default Productcard;
