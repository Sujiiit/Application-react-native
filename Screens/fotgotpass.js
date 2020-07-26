import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text,View, StyleSheet,TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable';
export default function Forget() {
    return (
        <View style={styles.container}>
              <View style={styles.header}>
              <Entypo name='squared-cross' color='#f5a623' size={32} />
              </View>

              <View style={styles.footer}>
                  <Text style={styles.forgot}>Forgot password?</Text>
                  <Text style={styles.forgottext}>Enter your email address or phone to reset  your password instruction</Text>

                  <Text style={styles.text_footer}>Email</Text>
                  <View style={styles.action}>
                       <MaterialCommunityIcons name='email-newsletter' color='#05375a' size={23} />
                       <TextInput placeholder='Your Email'  onChangeText={(value) => handleusername(value)} style={styles.textInput} autoCapitalize='none'  />
                       {/* { Valdata.emailinput ?  <Feather name='check-circle' color='black' size={15} /> : null } */}
                 </View> 

                 <Animatable.View animation = 'bounceIn'  style={styles.button}>
                  <TouchableOpacity style={styles.signIn}>
                    <Text onPress={() => navigation.navigate('Home')} style={styles.textSign}>Sign In</Text>
                  </TouchableOpacity>
                </Animatable.View>

              </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#3f51b5',

    
    },
    header: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 30,
    },
    footer: {
        flex: 5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: 'white',
    },
    forgot: {
        fontWeight: 'bold',
        fontSize: 28
    },
    forgottext: {
        fontSize: 18,
        marginTop: 15,
        color: '#a7aaac'
    },
    text_footer: {
        marginTop: 30,
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
       
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 15,
        color: '#05375a',   
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#3f51b5',
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 20,
        
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
});