import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
const Checkout = () => {
  const state = useSelector((state) => state.shop);
  console.log(state);
  return (
    <>
      <Navbar />
      <h1>Checkout</h1>
      <div>
        <div className="container checkout-box">
          {/* <h2>Total Items:{state.totalItems}</h2> */}
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Items</th>
                <th scope="col">Image</th>

                <th scope="col">Pieces</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {state.cartItems.map((item, index) => {
                return (
                  <tr>
                    <td scope="row">{index}</td>
                    <td>{item.title}</td>
                    <td>
                      <img
                        className="profile-pic"
                        width="50px"
                        src={item.image}
                      />
                    </td>
                    <td>{item.piece}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td>Total Items</td>
                <td>
                  <b>{state.totalItems}</b>
                </td>
                <td>
                  Cost:<b>{state.totalPrice}Rs</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container checkout-box">
          <h3>Payment Method : CASH ON DELIVERY</h3>
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <form class="row g-3">
            <div class="col-md-6">
              <label htmlFor="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="name@example.com"
              />
            </div>

            <div class="col-12">
              <label htmlFor="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label htmlFor="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label htmlFor="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>

            <div class="col-md-2"></div>
            <div class="col-12">
              <h5 style={{ color: "red" }}>Total: {state.totalPrice}</h5>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-danger">
                Proceed to Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
