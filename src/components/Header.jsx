import React from "react";
import "../../scss/Header.scss";
import navi from "../assets/nav-i1.svg";
import navIcon from "../assets/navIcon.svg";
import navIcon2 from "../assets/navIcon2.svg";
import navIcon3 from "../assets/navIcon3.svg";
import navIcon4 from "../assets/navIcon4.svg";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Link to="/">
            <Navbar.Brand as="span">
              <img src={navi} alt="LOGO" />
            </Navbar.Brand>
          </Link>
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
                <Link to="/about">
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
        <div className="navIcon">
          <img src={navIcon} alt="" />
          <img src={navIcon2} alt="" />
          <img src={navIcon3} alt="" />
          <img src={navIcon4} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
