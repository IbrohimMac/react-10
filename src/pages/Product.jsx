// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import "../../scss/Product.scss";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavbarCollapse } from "react-bootstrap";
import i1 from "../assets/carousel.svg";
import i2 from "../assets/carousel2.svg";
import i3 from "../assets/carousel3.svg";
import i4 from "../assets/carousel4.svg";
import i5 from "../assets/carousel5.svg";
import i6 from "../assets/prod-s2.svg";
import s3 from "../assets/s3-card.svg";
import s3i from "../assets/s3-card2.svg";
import s3n from "../assets/s3-card3.svg";

const Product = () => {
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
                <button className="butAdd">Add To Cart</button>
                <div className="lin"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="s2">
          <div className="lii"></div>
          <div className="container">
            <div className="s2-tri">
              <h2>Description</h2>
              <h2>Additional Information</h2>
              <h2>Reviews [5]</h2>
            </div>
            <p className="s2-p">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="s2-p1">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
            <div className="s2-card-vme">
              <img src={i6} alt="" />
              <img src={i6} alt="" />
            </div>
          </div>
        </section>
        <section className="s3">
          <div className="lii"></div>
          <div className="container">
            <h1 className="s3-h">Related Products</h1>
            {products.length > 0 && (
              <div className="s3-cards">
                {products.map((product) => (
                  <div className="s3-card">
                    <img className="s3-i" src={product.img} />
                    <div className="card-nonee">
                      <Navbar>
                        <Navbar.Collapse>
                          <Nav>
                            <Link to="/cart">
                              <Nav.Link as="span">
                                <button>Add To Cart</button>
                              </Nav.Link>
                            </Link>
                          </Nav>
                        </Navbar.Collapse>
                      </Navbar>
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
export default Product;
