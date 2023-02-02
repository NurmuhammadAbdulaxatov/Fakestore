import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="image" src={product.image} alt="" />
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
      <p className="info-p">{product.description}</p>
      <p>{product.price}</p>
      <p className="rating">Rating: {product.rating.rate}</p>
      <Link to={`/${product.id}`} className="btn">
        Details
      </Link>
    </div>
  );
};

export default Product;
