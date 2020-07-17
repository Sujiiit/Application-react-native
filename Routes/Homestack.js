import React from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../Screens/Welcome';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import Main from '../Screens/Main';

const screens = {
    Main:    { screen: Main,      navigationOptions: { headerShown: null }},
    Home:    { screen: Home,      navigationOptions: { headerShown: null }},
    Welcome: { screen: Welcome,   navigationOptions: { headerShown: null }},
    SignIn:  { screen: Signin,    navigationOptions: { headerShown: null }},
    SignUp:  { screen: Signup,    navigationOptions: { headerShown: null }},   

}


const stack = createStackNavigator(screens);
export default createAppContainer(stack);