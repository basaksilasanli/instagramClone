/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Router from './src/Router'

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './src/reducers'



export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk,logger))
    return (
      <Provider store = {store}>
        <Router/>
      </Provider>
      
      
    );
  }
}

