//Libary
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen
import WelcomeT from '../screen/WelcomeText';
import LoginScreen from '../screen/UserAuth/LoginScreen';
import RegisterScreen from '../screen/UserAuth/RegisterScreen';

const AuthStack = createStackNavigator(
  {
    LoginScreen: {screen: LoginScreen},
    RegisterScreen: {screen: RegisterScreen},
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
