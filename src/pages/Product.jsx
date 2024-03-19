import React, { Component } from "react";
import "../../scss/Product.scss";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import i1 from "../assets/carousel.svg";
import i2 from "../assets/carousel2.svg";
import i3 from "../assets/carousel3.svg";
import i4 from "../assets/carousel4.svg";
import i5 from "../assets/carousel5.svg";
const Product = () => {
  return (
    <>
      <main>
        <section className="s1">
          <div className="container">
            <div className="admin">
              <Carousel className="admin-caru">
                <div className="caru">
                  <img src={i1} />
                </div>

                <div>
                  <img src={i2} />
                </div>
                <div>
                  <img src={i3} />
                </div>
                <div>
                  <img src={i4} />
                </div>
                <div>
                  <img src={i5} />
                </div>
              </Carousel>
              <div className="mini1">
                <h1>Asgaard sofa</h1>
                <h2>Rs. 250,000.00</h2>
                <p>
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
                <div className="buts">
                  <button>L</button>
                  <button>XL</button>
                  <button>XS</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Product;
