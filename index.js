/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootreducer from './src/reducer/index';
import AppNavigator from './src/route/AppNavigator';
import thunk from 'redux-thunk';

const store = createStore(rootreducer, applyMiddleware(thunk));

const AppContainer = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
