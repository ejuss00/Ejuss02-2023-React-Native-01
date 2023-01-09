import React from "react";
//Navigation components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, Dimensions} from 'react-native';

//Import Screens
import HomePage from "../screens/HomePage";
import HUserProfile from "../screens/HUserProfile";
import HNotificationProfile from "../screens/HNotificationProfile";
import HGroupProfile from "../screens/HGroupProfile";
import HFriendProfile from "../screens/HFriendProfile";

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

function TabHomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage}/>
    </Stack.Navigator>
  );
}

function TabUserProfile() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HUserProfile" component={HUserProfile}/>
      </Stack.Navigator>
    );
  }

  function TabNotificationProfile() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HNotificationProfile" component={HNotificationProfile}/>
        <Stack.Screen name="HGroupProfile" component={HGroupProfile}/>
      </Stack.Navigator>
    );
  }

  const Tabs = createBottomTabNavigator();

  export default function Navigation(props){
    return(
      <NavigationContainer>
        <Tabs.Navigator screenOption={({route}) => ({
            headerTitle: () => <Text>Header</Text>,
            tabBarIcon: ({focused, color, size, padding}) => {
                let iconName;
                if (route.name === 'TabUser') {
                    iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === 'TabNotification') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'TabHome') {
                    iconName = focused ? 'home' : 'home-outline';
                }
                return (
                  <Ionicons name={iconName} size={size} color={color} style={{paddingBottom: padding}}/> );
            },     
        })}
        tabBarOptions={{
            activeTintColor: '#lightseagreen',
            inactiveTintColor: '#grey',
            labelStyle: {fontSize:16},
            style: {width: fullScreenWidth,}
        }}
        >

          <Tabs.Screen name="TabUser" component={TabUserProfile} />
          <Tabs.Screen name="TabNotification" component={TabNotificationProfile} />
          <Tabs.Screen name="TabHome" component={TabHomeStackScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }


// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//     return (
//         //component here
//         <Tab.Navigator>
//             <Tab.Screen name="HUserProfile" component={HUserProfile} />
//             <Tab.Screen name="HNotificationProfile" component={HNotificationProfile} />
//             <Tab.Screen name="Home" component={HomePage} />
//             <Tab.Screen name="HGroupProfile" component={HGroupProfile} />
//             <Tab.Screen name="HFriendProfile" component={HFriendProfile} />
//         </Tab.Navigator>
//     );
// }

// export default Tabs;