import axios from "axios";
import "../Styles/Productcard.css";
import React, { useState, useEffect } from "react";
// import productsJsonData from "../data/products.json";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

function Productcard() {
  const [products, setProducts] = useState([]);
  const [useMongoDB, setUseMongoDB] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (useMongoDB) {
      axios
        .get("http://localhost:3001/getProducts")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    } else {
      // setProducts(productsJsonData);
    }
  }, [useMongoDB]);

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      {/* <div className="toggle-button">
        <button onClick={() => setUseMongoDB(false)}>Use JSON Data</button>
        <button onClick={() => setUseMongoDB(true)}>Use MongoDB</button>
      </div> */}
      <div className="products-container">
        {Array.isArray(products) &&
          products.map((product) => (
            <div
              key={product.id || product._id}
              className="productCard"
              onClick={() => handleClick(product.id || product._id)}
            >
              <div className="ImageURL">
                <img src={product.imgUrl} alt={product.name}></img>
              </div>
              <div className="product-info">
                <p> {product.name}</p>
                <p> {product.price}</p>
              </div>
              <span className="view-more">View more</span>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}

export default Productcard;
