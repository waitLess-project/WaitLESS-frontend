import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MealCard from "../MealCard/MealCard";
import "./styles.css";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState(new Map());

  //fetches the meals
  const fetchMeals = () => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then(setMeals);
  };

  //to fetch the meals when this component is opened
  useEffect(() => {
    fetchMeals();
  }, []);

  //adds a meal to the order
  const addToOrder = (id) => {
    if (!order.has(id)) {
      setOrder(new Map(order.set(id, 1)));
    } else {
      let newQty = order.get(id) + 1;
      setOrder(new Map(order.set(id, newQty)));
    }
  };

  //gets the orders from the state
  const getOrders = () => meals.filter((meal) => order.has(meal.id));

  const getTotal = () => {
    let total = 0;
    for (let [key, value] of order) {
      total += meals[key].price * value;
    }
    return total.toFixed(2);
  };

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
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" />
        </form>
        <select
          className="filter-by"
          onChange={(e) => setFilter(e.target.value)}
        >
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
          <Link to="/checkout">
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
