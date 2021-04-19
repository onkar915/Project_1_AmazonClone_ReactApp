//data layer
//we need this to track absket

import React,{ createContext,useContext,useReducer } from "react";
//this the data layer
export const StateContext = createContext();

//build  ap rovider wrap
//so we can gice acess to data layer
//wraap our app and provide the data layer
export const StateProvider = ({reducer,initialState,children})=>(
 <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//stateprovide, index.js, reducer

//this is how we use it inisde of a component
//pull info formt the datalayer
export const useStateValue  = () => useContext(StateContext);