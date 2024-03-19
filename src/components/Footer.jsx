import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../scss/Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="big">
            <div className="mini1">
              <h1>Funiro.</h1>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="mini2">
              <p className="mini2-p">Links</p>
              <div className="mini2-a">
                <Navbar
                  collapseOnSelect
                  expand="lg"
                  className="bg-body-tertiary"
                >
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                      <div className="nav-p">
                        <Link to="/">
                          <Nav.Link as="span">
                            <p>Home</p>
                          </Nav.Link>
                        </Link>
                        <Link to="/shop">
                          <Nav.Link as="span">
                            <p>Shop</p>
                          </Nav.Link>
                        </Link>
                        <Link to="/product">
                          <Nav.Link as="span">
                            <p>About</p>
                          </Nav.Link>
                        </Link>
                        <Link to="/contact">
                          <Nav.Link as="span">
                            <p>Contact</p>
                          </Nav.Link>
                        </Link>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
            <div className="mini3">
              <p className="mini3p">Help</p>
              <div className="mini3-p">
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policies</p>
              </div>
            </div>
            <div className="mini4">
              <p className="mini4p">Newsletter</p>
              <textarea
                name="email"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter Your Email Address"
              ></textarea>
            </div>
          </div>
          <div className="mini5">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
