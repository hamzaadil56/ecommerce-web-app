import "./App.css";
import "./fontawesome-free-5.15.4-web/css/all.min.css";
import React from "react";
import "./App.css";
import { links } from "./data";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import { useSelector } from "react-redux";
const Navbar = () => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const state = useSelector((state) => state.shop);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="navbar-container container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-items collapse navbar-collapse" id="navbarNav">
            <ul className="me-auto navbar-nav">
              {links.map((link, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link
                      className="nav-link"
                      to={link === "home" ? "/" : `/${link}`}
                    >
                      {capitalize(link)}
                    </Link>
                    {/* <a className="nav-link" href="#">
                    {capitalize(link)}
                  </a> */}
                  </li>
                );
              })}
            </ul>
            <div className="cart-container">
              <button
                className="cart-btn position-relative "
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i className="fas fa-shopping-cart cart-icon"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.totalItems}
                </span>
              </button>
            </div>
            <button className="btn btn-warning">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
