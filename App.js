import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Navigation from './Routes/Homestack'


 function App() {
   return (
    <View style={styles.container}>

        <Navigation />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
