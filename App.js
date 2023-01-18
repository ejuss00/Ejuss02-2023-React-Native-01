import 'react-native-gesture-handler';// make sure this stays at very top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionic from 'react-native-vector-icons/Ionicons';
// import Tabs from './navigation/tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';


import FirstScreen from './screens/FirstScreen';
import HomePage from "./screens/HomePage";
import HUserProfile from "./screens/HUserProfile";
import HNotificationProfile from "./screens/HNotificationProfile";
import HGroupProfile from "./screens/HGroupProfile";
import HFriendProfile from './screens/HFriendProfile';

import SelectFriendCheck from './components/SelectFriendCheck';

//screens/screens2
import AllExpenses from './screens/screens2/AllExpenses';
import RecentExpenses from './screens/screens2/RecentExpenses';
import ManageExpense from './screens/screens2/ManageExpense';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const [showAppOptions, setShowAppOptions] = useState(false);


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function FriendBillList () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FriendBillList" component={HFriendProfile} options={{ headerShown: false }} />
      <Stack.Screen name="SelectFriendCheck" component={SelectFriendCheck}/>
    </Stack.Navigator>
  );
}

function ExpenseList ( ) {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="HNotificationProfile" component={HNotificationProfile} options={{ headerShown: false }} /> */}
      <Stack.Screen name="AllExpenses" component={AllExpenses} options={{ headerShown: false }}/>
      <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ headerShown: false }}/>
      <Stack.Screen name="RecentExpenses" component={RecentExpenses} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'happy' : 'happy-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } else if (route.name === 'Group') {
            iconName = focused ? 'radio' : 'radio-outline';
          } else if (route.name === 'Friend') {
            iconName = focused ? 'people' : 'people-outline';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={HUserProfile} />
      <Tab.Screen name="Notification" component={ExpenseList} options={{ headerShown: false }}/>
      <Tab.Screen name="Group" component={HGroupProfile} />
      <Tab.Screen name="Friend" component={FriendBillList} options={{ headerShown: false }} />
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
