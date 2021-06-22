import React from "react";
import "./checkout.style.css";
import { useHistory } from "react-router-dom";

const Checkout = ({ order, meals }) => {
  const history = useHistory();

  const checkoutItems = () => {
    return order.forEach((key, value) => {
      return (
        <div className="item-container">
          <div className="item">{meals[key].title}</div>
          <div className="cost">cost</div>
        </div>
      );
    });
  };

  return (
    <div className="checkout">
      <h1 className="order-header">Order Details</h1>
      <div className="box-outer">
        {checkoutItems()}
        <div className="additional">Subtotal, taxes, charges </div>
        <div className="credit-card">
          <h3 className="heading-3">Credit card checkout</h3>
          <form className='form-credit'>
            <label className="credit-text">Cardholder's Name</label>
            <input type="text" name="name" className="credit-text" />
            <br />
            <label className="credit-text">Card Number</label>
            <input type="text" name="card_number" className="credit-text" />

            <div className="row">
              <div className="col">
                <label className="credit-text">Expiration Date</label>
                <input type="month" name="exp_date" className="credit-text" />
              </div>
              <div className="col">
                <label className="credit-text">CVV</label>
                <input type="text" name="cvv" className="credit-text" />
              </div>
            </div>
            <button className="button">Checkout </button>
          </form>
        </div>
        <button className="button" onClick={() => history.push("/menu")}>
          Go Back
        </button>
        <button className="button" onClick={() => history.push("/")}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
