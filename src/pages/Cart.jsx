import React, { useEffect, useState } from "react";
import Data from "../../db.json";
import "../../scss/Cart.scss";
import s3 from "../assets/s3-card.svg";
import s3i from "../assets/s3-card2.svg";
import s3n from "../assets/s3-card3.svg";
const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const Data = await res.json();
        setProducts(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <main>
        <section className="s1">
          <div className="container">
            {products.length > 0 && (
              <div className="s1-cards">
                {products.map((product) => (
                  <div className="s1-card">
                    <img className="s1-i" src={product.img} />
                    <h2>{product.name}</h2>
                    {/* <p>{product.description}</p> */}
                    {/* <h3>{product.currentCost}</h3> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
