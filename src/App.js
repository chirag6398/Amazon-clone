import React from "react";
import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Components/checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
