import React, { useEffect, useState } from "react";
import "../../scss/Home.scss";
import Data from "../../db.json";
import s2I1 from "../assets/s2-i1.svg";
import s2I2 from "../assets/s2-i2.svg";
import s2I3 from "../assets/s2-i3.svg";
import s3 from "../assets/s3-card.svg";
import s3i from "../assets/s3-card2.svg";
import s3n from "../assets/s3-card3.svg";

const Home = () => {
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
          <div className="i1"></div>
          <div className="s1-vme">
            <h4>New Arrival</h4>
            <h1>Discover Our New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button>BUY NOW</button>
          </div>
        </section>
        <section className="s2">
          <div className="container">
            <h1>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="s2-cards">
              <div className="s2-card">
                <img src={s2I1} alt="" />
                <h2>Dining</h2>
              </div>
              <div className="s2-card">
                <img src={s2I2} alt="" />
                <h2>Living</h2>
              </div>
              <div className="s2-card">
                <img src={s2I3} alt="" />
                <h2>Bedroom</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="s3">
          <div className="container">
            <h1>Our Products</h1>
            {products.length > 0 && (
              <div className="s3-cards">
                {products.map((product) => (
                  <div className="s3-card">
                    <img className="s3-i" src={product.img} />
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
            <button className="s3-end">Show More</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
