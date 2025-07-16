import React from "react";
import productsData from "../data/products.json";
// import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function ProductDetailPage(props) {
  const { productId } = useParams();
  const products = productsData.find((p) => p.id === parseInt(productId));

  //  const [products, setProducts] = useState([]);
  //     useEffect(() => {
  //       setProducts(productsData);
  //     }, []);
  return (
    <>
      {
        ////////// This is for fetching JSON data ///////
        products.map((product) => (
          <div key={product.id} className="productCard">
            <div className="ImageURL">
              <img src={product.imgUrl} alt={product.name}></img>
            </div>
            <div className="product-info">
              <p> {product.ncdc}</p>
              <p> {product.description}</p>
              <p> {product.code}</p>
              <p> {product.honda}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ProductDetailPage;
