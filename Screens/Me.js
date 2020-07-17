import React from 'react';
import {View,Text,Button} from 'react-native';

export default function Me({navigation}) {
    return (
        <View>
            <Text>Me Screen</Text>
            <Button title='hello' onPress={ () => navigation.navigate('Welcome')} />
        </View>
    );
}