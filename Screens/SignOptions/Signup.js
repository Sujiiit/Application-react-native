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
    ScrollView
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import { useTheme } from 'react-native-paper';


const Signin = ({navigation}) => {

    const [Valdata ,Changedata] = useState({
     Fullname: '', Email: '', emailinput: false, Password1: '', Password2: '',
      secureTextEntry1: false, secureTextEntry2: false,
     });
     
     
     function handlename(value)
     {
       if(value.length > 0) {
           Changedata({...Valdata,Fullname: value})
       }
     }

    function handlemail(value) 
    {
        if(value.length > 0)  {
        Changedata({  ...Valdata, emailinput: true, Email: value,  })  }
        else {  Changedata({   ...Valdata,  emailinput: false  })
      }
    }
    
    function handlepassword1(value) {    Changedata({  ...Valdata, Password1: value  })   };

    function handlepassword2(value) {    Changedata({  ...Valdata, Password2: value  })   };

    function eyeupdate1() {  Changedata({ ...Valdata, secureTextEntry1: ! Valdata.secureTextEntry1 })   };

    function eyeupdate2() {   Changedata({ ...Valdata, secureTextEntry2: ! Valdata.secureTextEntry2 })   };  
    
    function handlesubmit() { 
         if(Valdata.Fullname.length > 10 && Valdata.Email == 'sujiiit' )
           {
              if(Valdata.Password1 !== Valdata.Password2)
              {
                  alert(' Password Mismatch');
              }
              else if(Valdata.Password1.length < 9)
              {
                   alert('Password too short');
              }
              else {
                  alert('Account created successfully.')
              }
           }
           else 
           {
                alert('Some error occoured.');
           }
        }
  

return (
    <ScrollView>
    <View  style={styles.container} > 
    {/* Main view container */}

        {/* Header section */}
        <View style={styles.header}>
            <TouchableOpacity  onPress={ () =>  navigation.pop()}>
            < MaterialCommunityIcons name='arrow-left-bold-hexagon-outline' color='#f5a623' size={35} />
            </TouchableOpacity>
        
        <Text style={styles.text_header}>Sign Up </Text> 
        </View>
        {/* Header section finished */}
             
        {/* Foooter Section started */}
        <Animatable.View  animation='fadeInUpBig' style={styles.footer}>

             {/* Full name section started */}
             <Text style={styles.text_footer}>Enter Full Name</Text>
             <View style={styles.action}>
                <FontAwesome name='user-o' color='#05375a' size={20} />
                <TextInput placeholder='Enter your full name'  onChangeText={(value) => handlename(value)} style={styles.textInput} autoCapitalize='none'  />
             </View> 
              {/* Full name section finished */}

             {/* Email of Phone section started */}
             <Text style={[styles.text_footer,{marginTop: 15}]}>Email or phone</Text>
             <View style={styles.action}>
                <MaterialCommunityIcons name='email-newsletter' color='#05375a' size={23} />
                <TextInput placeholder='Enter email or phone...'  onChangeText={(value) => handlemail(value)} style={styles.textInput} autoCapitalize='none'  />
              { Valdata.emailinput ?  <Feather name='check-circle' color='black' size={15} /> : null }
             </View> 
             {/* Email of Phone section finished */}

              {/* Password section started */}
             <Text style={[styles.text_footer,{marginTop: 15}]}>Password</Text>
             <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={23} />
                <TextInput secureTextEntry={Valdata.secureTextEntry1}  onChangeText={(value) => handlepassword1(value) } placeholder=' Password' style={styles.textInput} autoCapitalize='none'  />
               
                <TouchableOpacity onPress={eyeupdate1} >
                { Valdata.secureTextEntry1 ? <Entypo  name='eye-with-line' color='black' size={17} /> :  <Entypo  name='eye' color='black' size={17} />  }
                </TouchableOpacity> 
             </View>
             {/* Password section finished */}

             {/* ReEnter Password Section started */}
             <Text style={[styles.text_footer,{marginTop: 15}]}>Confirm Password</Text>
             <View style={styles.action}>
                    <FontAwesome name='lock' color='#05375a' size={23} />
                    <TextInput secureTextEntry={Valdata.secureTextEntry2}  onChangeText={(value) => handlepassword2(value) } placeholder='Confirm your Password' style={styles.textInput} autoCapitalize='none'  />
               
                    <TouchableOpacity onPress={eyeupdate2} >
                    { Valdata.secureTextEntry2 ? <Entypo  name='eye-with-line' color='black' size={17} /> :  <Entypo  name='eye' color='black' size={17} />  }
                    </TouchableOpacity>   
             </View>
             {/* ReEnter Password Section finished */}
             
             {/* Sign Up button section started */}
             <Animatable.View animation = 'bounceIn'  style={styles.button}>
                <TouchableOpacity style={styles.signIn}>
                  <Text  onPress={() => handlesubmit()} style={styles.textSign}>Sign Up</Text>
                </TouchableOpacity>
             </Animatable.View>
              {/* Sign Up button section finished */}

              <Text style={styles.or}>-------OR-------</Text>

              {/* Sign In button section started */}
             <Text  style={styles.already}>Already have an account</Text>
             <Animatable.View animation = 'bounceIn'  style={styles.button}>
                <TouchableOpacity style={styles.signIn}>
                   <Text onPress={() => navigation.navigate('Home')} style={styles.textSign}>Sign In</Text>
                </TouchableOpacity>
             </Animatable.View>
             {/* Sign In button section finished */}

        </Animatable.View>  
         {/* Footer section finished */}

    </View>  
    </ScrollView>
   );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    backgroundColor: '#3f51b5'

    
    },
    header: {
        flex: 0.9,
        paddingHorizontal: 25,
        paddingBottom: 30,
         alignItems: 'center',
         backgroundColor: '#3f51b5',
         flexDirection: 'row',
         marginTop: 30
    },
    footer: {
        flex: 8,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: 'white',
        paddingHorizontal: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        // textAlign: 'center',
        marginLeft: 90,

    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
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
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    or: {
        marginTop: 15,
        textAlign: 'center',
        marginBottom: -15,
        color: '#f5a623',
        fontWeight: 'bold'
    },
    already:{
        marginTop: 25,
        textAlign: 'center',
        marginBottom: -20,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f5a623'
    }
  });
