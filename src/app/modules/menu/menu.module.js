import React, { Component } from "react";
import { Link } from "react-router-dom";
import MealCard from "./components/meal-card.module";
import './menu.styles.css'

export default class Menu extends Component {
  getTotal = () => {
    let total = 0;
    for (let [key, value] of this.props.order) {
      total += this.props.meals[key - 1].price * value;
      return total.toFixed(2);
    }
  };

  getOrders = () => {
    return this.props.meals.filter((meal) => {
      this.props.order.has(meal.id);
    });
  };

  render() {
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
              value={this.props.search}
              onChange={(e) => this.props.search(e.target.value)}
            />
            <input type="submit" />
          </form>
          <select
            className="filter-by"
            onChange={(e) => this.props.filter(e.target.value)}
          >
            <option value="specials">Specials</option>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="menu-view">
          <div className="meal-cards">
            {this.props.meals.map((meal) => (
              <MealCard
                meal={meal}
                key={meal.id}
                addToOrder={this.props.addToOrder}
                order={this.props.order}
              />
            ))}
          </div>
          <div className="cart">
            <div>
              <h4>CART/ORDER</h4>
              <ul>
                {this.getOrders().map((item) => (
                  <li key={item.id}>
                    {item.title} - Qty: {this.props.order.get(item.id)}
                  </li>
                ))}
              </ul>
              <div>
                <h4>TOTAL</h4>
                <span>$ {this.getTotal()}</span>
              </div>
            </div>
            <Link to="/checkout" props={this.props.order}>
              <button className="checkout-btn" style={{ cursor: "pointer" }}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
