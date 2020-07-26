
import * as React from 'react';
import { Text,View } from 'react-native';


import { createAppContainer                } from 'react-navigation';
import { NavigationContainer              } from '@react-navigation/native';
import { createStackNavigator             } from '@react-navigation/stack' ;
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

     
     // vector-icons files 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5           } from '@expo/vector-icons';
import { Feather                } from '@expo/vector-icons';
import { FontAwesome            } from '@expo/vector-icons';



    // Bottom tabs navigator files
import Home     from './Home';
import Discover from './Discover';
import Plus     from './Plus';
import Inbox    from './Inbox';
import Me       from './Me'
// import Welcome  from './Welcome'  // Eternal 
  
  
   // Home Stack-tab navigator files
import UserProfile  from './Userprofile';


const Tab = createMaterialBottomTabNavigator();


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
        component={Homestackscreen}
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
        options={{
          tabBarLabel: 'Me',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (      
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





/// import Mejs from './Welcome';

// const MeStack = createStackNavigator();

// function MeStackScreen() {
//   return (
//     <MeStack.Navigator>
//       <MeStack.Screen name="Home" component={Me} />
//       <MeStack.Screen name="Welcome" component={Mejs} />
//     </MeStack.Navigator>
//   );
// }

const Homestack = createStackNavigator();
 
 function Homestackscreen()  {
  return (
   <Homestack.Navigator  screenOptions={{ headerShown: false}}>
      <Homestack.Screen name='Home' component={Home} />
      <Homestack.Screen name='Userprofile' component={UserProfile}     />
   </Homestack.Navigator>
  );
 }