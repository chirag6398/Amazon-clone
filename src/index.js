import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { stateProvider } from "./StateProvider/stateProvider";
import { reducer, initialState } from "./StateProvider/reducer";

ReactDOM.render(
  <stateProvider initialState={initialState} reducer={reducer}>
    <App />
  </stateProvider>,
  document.getElementById("root")
);
