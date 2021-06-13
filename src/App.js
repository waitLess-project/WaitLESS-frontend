import {  Route, Switch } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Menu from './components/Menu/Menu';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
        <div className="routes">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
            
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
