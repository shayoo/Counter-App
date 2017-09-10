/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/pages/app.js'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { counter } from './src/reducers/counter';
let store = createStore(counter);


export default class ReactNativeCounter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('ReactNativeCounter', () => ReactNativeCounter);
