import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Components/checkout";
import Login from "./Components/Login";
import { auth } from "./Firebase/firebase";
import { StateValue } from "./StateProvider/StateProvider";

function App() {
  const [{}, dispatch] = StateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "Set_user",
          user: authUser.providerData[0].email,
        });
      } else {
        dispatch({
          type: "Set_user",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
