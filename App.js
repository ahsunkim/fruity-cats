import { AppRegistry } from 'react-native';
import Game from './components/Game';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/reducers';

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
