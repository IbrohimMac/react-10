import React, { useEffect, useState } from "react";
import "../../scss/Shop.scss";
import Data from "../../db.json";
import s2I1 from "../assets/s2-i1.svg";
import s2I2 from "../assets/s2-i2.svg";
import s2I3 from "../assets/s2-i3.svg";
import s3 from "../assets/s3-card.svg";
import s3i from "../assets/s3-card2.svg";
import s3n from "../assets/s3-card3.svg";

const Shop = () => {
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
        <div className="back"></div>
        <section className="s1">
          <div className="container">
            {products.length > 0 && (
              <div className="s1-cards">
                {products.map((product) => (
                  <div className="s1-card">
                    <img className="s1-i" src={product.img} />
                    <div className="card-nonee">
                      <button>Add to cart</button>
                      <div className="card-nonne">
                        <img src={s3} alt="" />
                        <img src={s3i} alt="" />
                        <img src={s3n} alt="" />
                      </div>
                    </div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>{product.currentCost}</h3>
                  </div>
                ))}
                {products.map((product) => (
                  <div className="s1-card">
                    <img className="s1-i" src={product.img} />
                    <div className="card-nonee">
                      <button>Add to cart</button>
                      <div className="card-nonne">
                        <img src={s3} alt="" />
                        <img src={s3i} alt="" />
                        <img src={s3n} alt="" />
                      </div>
                    </div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>{product.currentCost}</h3>
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

export default Shop;
