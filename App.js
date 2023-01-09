import 'react-native-gesture-handler';// make sure this stays at very top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Tabs from './navigation/tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import FirstScreen from './screens/FirstScreen';
import HomePage from "./screens/HomePage";
import HUserProfile from "./screens/HUserProfile";
import HNotificationProfile from "./screens/HNotificationProfile";
import HGroupProfile from "./screens/HGroupProfile";
import HFriendProfile from './screens/HFriendProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}  />
      </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={HUserProfile} />
      <Tab.Screen name="Notification" component={HNotificationProfile} />
      <Tab.Screen name="Group" component={HGroupProfile} />
      <Tab.Screen name="Friend" component={HFriendProfile} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
