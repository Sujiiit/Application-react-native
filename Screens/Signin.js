import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button,
    ScrollView,
    Dimensions
} from 'react-native';

import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native-gesture-handler';
// import { useTheme } from 'react-native-paper';


const Signin = ({navigation}) => {

    const [Valdata ,Changedata] = useState({
     Email: '', Password: '', emailinput: false, secureTextEntry: false,
     });
     
    function handleusername(value) 
    {
        if(value.length > 0)  {
        Changedata({  ...Valdata, emailinput: true, Email: value,  })  }
        else {  Changedata({   ...Valdata,  emailinput: false  })
      }
    }
    
    function handlepassword(value)
    {     
            Changedata({  ...Valdata, Password: value  })      
    }

    function eyeupdate() {  
            Changedata({ ...Valdata, secureTextEntry: ! Valdata.secureTextEntry })     
    }

  

    return (
      <ScrollView>
      <View  style={styles.container}  >
         
          <View style={styles.header}>
             <Text style={styles.text_header}>Sign In </Text>
             <Animatable.Image animation='bounceIn'
                style={styles.logo}  source={require('../Pictures/logo1.png')}  resizeMode='stretch' />
          </View>
          
          <Animatable.View  animation='fadeInUpBig' style={styles.footer}>

             <Text style={styles.text_footer}>Email</Text>
             <View style={styles.action}>
                <FontAwesome name='user-o' color='#05375a' size={20} />
                <TextInput placeholder='Your Email'  onChangeText={(value) => handleusername(value)} style={styles.textInput} autoCapitalize='none'  />
              { Valdata.emailinput ?  <Feather name='check-circle' color='black' size={15} /> : null }
             </View> 

             <Text style={[styles.text_footer,{marginTop: 40}]}>Password</Text>
             <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={23} />
                <TextInput secureTextEntry={Valdata.secureTextEntry}  onChangeText={(value) => handlepassword(value) } placeholder='Your Password' style={styles.textInput} autoCapitalize='none'  />
               
                <TouchableOpacity onPress={eyeupdate} >
                { Valdata.secureTextEntry ? <Entypo  name='eye-with-line' color='black' size={17} /> :  <Entypo  name='eye' color='black' size={17} />  }
                </TouchableOpacity>  

             </View>

             <Animatable.View animation = 'bounceIn'  style={styles.button}>
                <TouchableOpacity style={styles.signIn}>
                    <Text style={styles.textSign}>Sign In</Text>
                </TouchableOpacity>
             </Animatable.View>

             <Text style={styles.or}>-------OR-------</Text>
             <Text  style={styles.already}>Don't have an account</Text>
                <Animatable.View animation = 'bounceIn'  style={styles.button}>
                    <TouchableOpacity style={styles.signIn}>
                       <Text onPress={() => navigation.push('SignUp')} style={styles.textSign}>Sign Up</Text>
                    </TouchableOpacity>
                </Animatable.View>
          </Animatable.View>  
          
      </View>
      </ScrollView>
    );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f1f2f4',

    
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        // paddingBottom: 50,
         alignItems: 'center'
    },
    footer: {
        flex: 3,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 25
    },
    text_footer: {
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 15,
        color: '#05375a',
   
        
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#0070c6c9',
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
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    or: {
        marginTop: 15,
        textAlign: 'center',
        marginBottom: -15
    },
    already:{
        marginTop: 25,
        textAlign: 'center',
        marginBottom: -30,
        fontSize: 15,
        fontWeight: 'bold'
    },
    logo: {
        borderRadius: 65,
        height: 130,
        width: 130,
       marginTop: 5
    }
  });
