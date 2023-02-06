import 'react-native-gesture-handler';// make sure this stays at very top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//import screens/screens2
import SplitTransaction from './screens/SplitTransaction';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import FriendProfile from './screens/FriendProfile';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


function ExpenseList() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplitTransaction" component={SplitTransaction} />
      <Stack.Screen name="AllExpenses" component={AllExpenses} />
      <Stack.Screen name="FriendProfile" component={FriendProfile} options={{ headerShown: false }} />
      <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ headerShown: false }} />
      <Stack.Screen name="RecentExpenses" component={RecentExpenses} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <ExpenseList />
    </NavigationContainer>
  );
}


export default App;
