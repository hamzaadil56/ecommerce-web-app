import React from "react";
import Crousel from "./Crousel";
import { featured_products } from "./data";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Crousel />
      <section className="container-md featured-products">
        <h1>Featured Products</h1>
        <div className="underline"></div>
        <section className="grid-section">
          {featured_products.map((item, index) => {
            return (
              <div key={index} className="card ">
                <div className="overlay"></div>
                <img src={item.image} className="card-img-top" />
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            );
          })}
        </section>
        <button className="btn btn-dark all-products-btn">All Products</button>
      </section>
    </div>
  );
};

export default Home;
