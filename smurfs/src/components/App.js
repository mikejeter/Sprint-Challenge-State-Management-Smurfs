import React, { useState, useReducer, useEffect } from "react";
import axios from 'axios';

import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts/SmurfContext';
import { reducer } from '../reducers/smurfReducer';
import { initialSmurfs } from '../data';

import "./App.css";

const App = () => {
  const [loader, setLoader] = useState([]);

  const getSmurfs = () => {
    return axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log("res in axios: ", res.data)
        setLoader(res.data)})
  }

  useEffect(() => {
    getSmurfs();
  }, []);

  console.log("loader: ", loader);

  const [smurfState, dispatch] = useReducer(reducer, initialSmurfs);
  
    return (
      <>
          <SmurfContext.Provider value={{ smurfState, dispatch }}>
            <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
              <SmurfList />
            </div>
          </SmurfContext.Provider>
     </>
    );
}

export default App;