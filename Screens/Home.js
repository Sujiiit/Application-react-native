import React,{useState} from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
export default function Home({navigation}) {
  const [data,setdata] = useState({followbutton: false,likebutton: false,page: 'foryou'})
  function followornot() {
    setdata({...data,followbutton: ! data.followbutton})
  }
  function likeornot() {
    setdata({...data,likebutton: ! data.likebutton})
  }
  function Activepage(value) {
    if(value  === 'foryou')
     {
      setdata({...data,page: 'foryou'})
     }
     else {
      setdata({...data,page: 'following'})
     }
  }


  return (
  <View style={styles.container}>   

    <View style={styles.header}>  
      
        <TouchableOpacity onPress={() => Activepage('following')}>
        <Text style={[styles.ftag,{fontWeight: data.page == 'following' ? 'bold' : null}]}  >Following</Text>
        </TouchableOpacity>
        
        <Text style={{fontWeight: 'bold',color: 'white',fontSize: 20}} >    |    </Text>

        <TouchableOpacity  onPress={() => Activepage('foryou')}>
        <Text  style={[styles.ftag,{fontWeight: data.page == 'foryou' ? 'bold' : null}]} >For You</Text>  
        </TouchableOpacity>
    </View>

    <View style={styles.middle}>
        <TouchableOpacity onPress={() => navigation.navigate('Userprofile')} >
        <FontAwesome name='circle-thin' color='pink' size={60} style={styles.logo} />
        </TouchableOpacity>

        <TouchableOpacity onPress={followornot}>
       { data.followbutton ? <FontAwesome name='plus-circle' color='red' size={20} style={styles.plus} /> :
        <FontAwesome name='plus-circle' color='white' size={20} style={styles.plus} /> }
         </TouchableOpacity>
        
        <TouchableOpacity onPress={likeornot}>
        { data.likebutton ? <FontAwesome name='heartbeat' color='red' size={40} style={styles.logo} /> :
          <FontAwesome name='heartbeat' color='white' size={40} style={styles.logo} /> }
          <Text style={styles.likcomment}> 1.1k</Text>
        </TouchableOpacity>
        {/* heartbeat */}
        <FontAwesome5 name='comment-dots' color='white' size={40}  style={styles.logo} />
        <Text  style={styles.likcomment}>1.1k</Text>
        <Fontisto name='share-a' color='white' size={37}   style={styles.logo} />
        <Text  style={styles.likcomment}>share</Text>
    </View>

    <View style={styles.bottom}>
     <Text style={styles.username}>@username,1h ago</Text>
     <Text style={styles.username}>#hashtag #hashtag</Text>

     <View style={styles.music}>
     <Feather name='music' color='white' size={37}   style={styles.logo} />
     <Text style={styles.musicname}>Music name...</Text>
     </View>

    </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
     backgroundColor: '#3f25b0'
    },
    header: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 0.5,
      marginTop: 25,
  
    },
    ftag: {
      fontSize: 17,
      color: '#fff'
    },
    middle: {
      flex: 2,
      alignSelf: 'flex-end',
      marginRight: 20,
      // backgroundColor: 'red',
      alignItems: 'center',
    },
    logo: {
    marginTop: 25
    },
    plus: {
      marginTop: -10,
    },
    likcomment: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15
    },
    bottom: {
      flex: 0.7,
      // backgroundColor: 'green',
       marginLeft: 20
    },
    username: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 10
    },
    music: {
      flexDirection: 'row',
      marginTop: -5
    },
    musicname: {
      marginTop: 35,
      marginLeft: 20,
      fontSize: 17,
      color: 'white'
    }
  });