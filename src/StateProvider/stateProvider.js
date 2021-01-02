import React, { useContext, createContext, useReducer } from "react";

export const stateContext = createContext();

export const stateProvider = ({ reducer, initialState, children }) => {
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>;
};

export const stateValue = useContext(stateContext);
