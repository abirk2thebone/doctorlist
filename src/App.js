import React, { Component } from 'react';
import './App.css';
import Home from './containers/home'
import allReducers from "./reducers"
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'


const store = createStore(allReducers,applyMiddleware(logger));

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Home/>    
      </Provider>
    );
  }
}


export default App;
