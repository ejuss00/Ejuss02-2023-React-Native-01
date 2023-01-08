import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FirstScreen from './screens/FirstScreen';
import HomePage from "./screens/HomePage";
import Tabs from './navigation/tabs';


const Stack = createStackNavigator();


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
