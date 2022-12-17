
//import {  View } from 'react-native';
import BackGround from './component/BackGround';
import Flatwork from './component/Flatwork';
import Form from './component/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App=() =>{
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BackGround">
      <Stack.Screen name="Home" component={BackGround} />
      <Stack.Screen name="Gallery" component={Flatwork} />
      <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default App;