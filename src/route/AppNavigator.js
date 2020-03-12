//Libary
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen
import WelcomeT from '../screen/WelcomeText';

const AuthStack = createStackNavigator({
  WelcomeT: {screen: WelcomeT},
});

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
