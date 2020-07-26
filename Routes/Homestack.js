import React,{useState} from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//    Welcome Tabs
import Signin from '../Screens/SignOptions/Signin';
import Signup from '../Screens/SignOptions/Signup';
import Welcome from '../Screens/SignOptions/Welcome';
import Forgot from '../Screens/SignOptions/fotgotpass'


    //    function Authcheck() {
    //    const [IsLoading,setIsLoading] = useState(true);
    //    let screens;
    //    (IsLoading) ? screens =  Welscreens : screens = Authscreens;
 
      
    //    return (
       
    //    );
      

    // }

const Welscreens = {
	Welcome: { screen: Welcome,   navigationOptions: { headerShown: null }},
	SignIn:  { screen: Signin,    navigationOptions: { headerShown: null }},
    SignUp:  { screen: Signup,    navigationOptions: { headerShown: null }},
    Forgot:  { screen: Forgot,   navigationOptions: { headerShown: null  }},   
}



import Main from '../Screens/Main';

const Authscreens = {
    Main:    { screen: Main,      navigationOptions: { headerShown: null }},

}

 // const stack = createStackNavigator(Welscreens);
 // export const wel = createAppContainer(stack);

  stack = createStackNavigator(Authscreens);
 export default createAppContainer(stack);