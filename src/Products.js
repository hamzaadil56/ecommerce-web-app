import React from "react";
import { items, links } from "./data";
import Navbar from "./Navbar";
import { products } from "./data";
import "./App.css";
import Items from "./Items";
import { ACTIONS } from "./Store/action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const allColors = ["all", ...new Set(products.map((item) => item.color))];

  const state = useSelector((state) => state.shop);

  const filterItems = (category) => {
    dispatch({ type: ACTIONS.FILTER_CATEGORY, payload: category });
  };
  const filterColors = (color) => {
    dispatch({ type: ACTIONS.FILTER_COLOR, payload: color });
  };
  const filterPrice = (e) => {
    dispatch({ type: ACTIONS.FILTER_PRICE, payload: e.target.value });
  };
  return (
    <div>
      <Navbar />
      {state.isAuthenticated ? (
        <div
          class="alert alert-success alert-dismissible d-flex align-items-center"
          role="alert"
        >
          <button
            data-bs-dismiss="alert"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
          <div>An example alert with an icon</div>
        </div>
      ) : (
        ""
      )}
      <section className="products-container">
        <div className="header">
          <h1>All the Products You Want!</h1>
        </div>
        <div className="grid-container">
          <section className="aside section">
            <aside className="filter-container">
              <div className="filter-boxes">
                <form action="">
                  <input
                    onChange={(e) => {
                      dispatch({
                        type: ACTIONS.SEARCH,
                        payload: e.target.value,
                      });
                    }}
                    type="search"
                    name="search"
                    id="search-box"
                    placeholder="Search"
                  />
                </form>
              </div>
              <div className="filter-boxes">
                <h5>Category</h5>
                {state.allCategories.map((category, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => filterItems(category)}
                      className="btn btn-transparent filter-btn"
                    >
                      {capitalize(category)}
                    </button>
                  );
                })}
              </div>
              <div className="filter-boxes">
                <h5>Color</h5>

                {allColors.map((color, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => filterColors(color)}
                      className={color === "all" ? "btn" : "btn color-btn"}
                      style={color === "all" ? {} : { backgroundColor: color }}
                    >
                      {color === "all" ? capitalize(color) : ""}
                    </button>
                  );
                })}
              </div>
              <div className="filter-boxes">
                <h5>Price</h5>
                <input
                  type="range"
                  min={state.minValue}
                  max={state.maxValue}
                  value={state.initialValue}
                  className="range-slider"
                  onChange={(e) => filterPrice(e)}
                />
                <p>{state.initialValue}</p>
              </div>
            </aside>
          </section>
          <Items products={state.shopItems} />
        </div>
      </section>
    </div>
  );
};

export default Products;
