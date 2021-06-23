import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./shared/components/footer/footer.module";
import LandingPage from "./modules/landing/landing.module";
import Menu from "../components/Menu/Menu";
import CheckoutModule from "./modules/checkout/checkout.module";
import NotFoundModule from "../app/layout/not-found/not-found.module";

function App() {
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

  return (
    <div className="App">
      <div className="routes">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/about">
            {/* <About /> */}
          </Route>
          <Route exact path="/menu">
            <Menu
              search={search}
              meals={meals}
              order={order}
              addToOrder={addToOrder}
            />
          </Route>
          <Route exact path="/checkout">
            <CheckoutModule order={order} meals={meals} />
          </Route>
          <Route path="*" component={NotFoundModule}></Route>
        </Switch>
      </div>
      <Footer />
    </div>

    // <div className="App">
    //     <LandingPage />
    //     <Footer />
    // </div>
  );
}

export default App;
