import React,{useState} from 'react';
import {View,Text,Button,Image} from 'react-native';


export default function app()
{
	return (
      <Text>Hello</Text>
		);
}

// import ImagePicker from 'react-native-image-picker';
// // const [val,setval] = useState(require('../Pictures/logo1.png'))
// export default function Me({navigation}) {
	
//     return (
//         <View style={{flex: 1,alighItems: 'center', justifyContent: 'center'}}>
//             <Text>User profile Screen</Text>
//              /// <Image source={val} />
//              <Button title='click me'  onPress={Hello}/>
//       </View>
//      );
   


// 	const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
//   };

// const Hello = () => {	

// 	ImagePicker.showImagePicker(options, (response) => {
//   // console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton);
//   } 

// });

// }

// }

