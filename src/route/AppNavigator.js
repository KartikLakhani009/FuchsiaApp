//Libary
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen
import WelcomeT from '../screen/WelcomeText';
import LoginScreen from '../screen/UserAuth/LoginScreen';
import RegisterScreen from '../screen/UserAuth/RegisterScreen';
import UserListScreen from '../screen/UserListScreen';
import UserDetailsScreen from '../screen/UserDetailsScreen';
import SplashScreen from '../screen/SplashScreen/SplashScreen';

const AuthStack = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    LoginScreen: {screen: LoginScreen},
    RegisterScreen: {screen: RegisterScreen},
    WelcomeT: {screen: WelcomeT},
    UserListScreen: {screen: UserListScreen},
    UserDetailsScreen: {screen: UserDetailsScreen},
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
