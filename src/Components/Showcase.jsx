import React, { useState, useEffect } from "react";
import Product from "./Product";

const Showcase = () => {
  const [open, showProducts] = useState(false);

  function handleSidebar() {
    showProducts(!open);
  }

  const [count, setCount] = useState(1);

  function inCounter() {
    setCount(count + 1);
  }

  function disCounter() {
    setCount(count - 1);
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [count]);

  return (
    <div className="showcase">
      <div className="container">
        <div className="buttonbek">
          <button onClick={handleSidebar}>Show Products</button>
        </div>
        {open && (
          <div className="products">
            <div className="count-btn">
              <div className="counter">
                <button disabled={count < 2} onClick={disCounter}>
                  Minus
                </button>
                <span className="son">{count}</span>
                <button disabled={count > 19} onClick={inCounter}>
                  Plus
                </button>
              </div>
            </div>
            <div className="grid">
              <div className="card">
                {products.map((p) => (
                  <Product product={p} key={crypto.randomUUID()} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
