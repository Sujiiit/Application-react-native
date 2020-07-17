
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import Home from './Home';
import Discover from './Discover';
import Plus from './Plus';
import Inbox from './Inbox';
import Me from './Me'
 


const Tab = createMaterialBottomTabNavigator();

import Welcome from './Welcome'



const screensbar = {
    Me:   { screen: Me},
}


const stacker = createStackNavigator(screensbar);
const final = createAppContainer(stacker);



function MyTabs({navigation}) {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 15 }}
      style={{ backgroundColor: 'tomato' }}
    >
     
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
    />
    
      <Tab.Screen   
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (  
            <FontAwesome5 name="searchengin" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarLabel: 'Plus',
          // tabBarColor: 'black',
          tabBarIcon: ({ color }) => (      
            <FontAwesome name="plus" color={color} size={31}  />
          ),
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (      
            <Feather name="inbox" color={color} size={25} />
          ),
        }}
      />
    
       
      <Tab.Screen
        name="Me"
        component={Me}
        navigation={navigation}
        options={{
          tabBarLabel: 'Me',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (      
            // <Entypo name="squared-plus" />
            <FontAwesome name="user" color={color} size={27} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App()
  {
    return (
             <NavigationContainer> 
                <MyTabs />  
             </NavigationContainer>
           );
  }
