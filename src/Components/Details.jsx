import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { detailsId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${detailsId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return product ? (
    <div className="product-d">
      <img className="image" src={product.image} alt="" />
      <div className="info">
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <p className="info-p">{product.description}</p>
        <p>{product.price}</p>
        <Link to={"/"} className="btn">
          Back
        </Link>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
