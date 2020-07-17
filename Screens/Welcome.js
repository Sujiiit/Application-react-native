import React from 'react';
import { View,StyleSheet,Text,Image,TouchableOpacity,Button,Dimensions}  from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable';


 export default function Welcome({navigation}) {
    return (
        
      <View style={styles.container}>
          <View style={styles.header}>
              <Animatable.Image animation='bounceIn'
                style={styles.logo}  source={require('../Pictures/logo1.png')}  resizeMode='stretch' />
          </View> 

          <Animatable.View animation='fadeInUpBig' style={styles.footer}>
              <Text style={styles.title}>Stay connected with everyone!</Text>
             
              <Text style={styles.text}>Let's get started</Text>
     
                  <TouchableOpacity  style={styles.button}   >
                  <Icon style={ styles.buttontext} name="rocket" size={40} color="white"  onPress={() => console.log(navigation)} />
                  </TouchableOpacity> 
              </Animatable.View> 
      </View>
    );
  }
 


 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f2f4',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: "center"
    },
    footer: {
        flex: 2,
        // backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 30,
    },
    logo: {
        borderRadius: 80,
        height:  Dimensions.get('window').height/4,
        width:   Dimensions.get('window').width/2.2,

    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    text: {
        color: 'grey',
        fontSize: 18,
        marginLeft: 2
    },
    button: {
        flexDirection: 'row-reverse',
        marginTop:  20  
          
    },
    buttontext: {
        backgroundColor: 'black',
        height: 70,
        width: 70,
        borderRadius: 50,
        padding: 15
    }
    
  });