import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import  Auth from './Routes/Homestack'


 function App() {
   return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor='transparent' /> 
        <Auth />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f25b0'
  }
});


