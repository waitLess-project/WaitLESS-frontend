import React, { useState, useEffect } from "react";
import MealCard from "../MealCard/MealCard";
import "./styles.css";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState([]);

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
    if (!order.includes(id)) {
      setOrder((order) => [...order, id]);
    }
  };

  //gets the orders from the state
  const getOrders = () => meals.filter((meal) => order.includes(meal.id));

  return (
    <div className="menu">
      <div className="search-filter">
        <form>
          <input
            type="text"
            label="searchBar"
            placeholder="enter an item"
            name="searchBar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" />
        </form>
        <select onChange={(e) => setFilter(e.target.value)}>
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
          <h4>CART/ORDER</h4>
          <ul>
            {getOrders().map((order) => (
              <li>{order.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
