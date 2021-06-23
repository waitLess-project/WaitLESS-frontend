import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MealCard from "../../../components/MealCard/MealCard";
import "./styles.css";

const Menu = ({ order, meals, search, filter, addToOrder }) => {
  const getTotal = () => {
    let total = 0;
    for (let [key, value] of order) {
      total += meals[key-1].price * value;
    }
    return total.toFixed(2);
  };

  //gets the orders from the state
  const getOrders = () => meals.filter((meal) => order.has(meal.id));

  return (
    <div className="menu">
      <div className="search-filter">
        <form>
          <input
            className="search-bar"
            type="text"
            label="searchBar"
            placeholder="enter an item"
            name="searchBar"
            value={search}
            onChange={(e) => search(e.target.value)}
          />
          <input type="submit" />
        </form>
        <select className="filter-by" onChange={(e) => filter(e.target.value)}>
          <option value="specials">Specials</option>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="menu-view">
        <div className="meal-cards">
          {meals.map((meal) => (
            <MealCard
              meal={meal}
              key={meal.id}
              addToOrder={addToOrder}
              order={order}
            />
          ))}
        </div>
        <div className="cart">
          <div>
            <h4>CART/ORDER</h4>
            <ul>
              {getOrders().map((item) => (
                <li key={item.id}>
                  {item.title} - Qty: {order.get(item.id)}
                </li>
              ))}
            </ul>
            <div>
              <h4>TOTAL</h4>
              <span>$ {getTotal()}</span>
            </div>
          </div>
          <Link to="/checkout" props={order}>
            <button className="checkout-btn" style={{ cursor: "pointer" }}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
