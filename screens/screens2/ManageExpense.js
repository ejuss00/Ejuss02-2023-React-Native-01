import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

function ManageExpense({ route, navigation }) {
  const { friendData } = route.params;

  //calculate total bill
  const [billAmount, setBillAmount] = useState('');
  const [dividedAmount, setDividedAmount] = useState(0);


  return (
    <SafeAreaView >
      <View>
        <Text>Manage Bill Upon Others!</Text>
        <Text>=== Split Equally Mode ===</Text>

        <TextInput placeholder="Enter total bill"
          style={{ color: 'black', backgroundColor: 'white', width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
        />

        <Button title="Calculate" color="secondary" />


        <FlatList
          data={friendData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {
              name: item.name,
              age: item.age,
              email: item.email,
              debt: item.debt
            })}>
              <Text>{item.name} DEBT : RM{item.debt}</Text>
            </TouchableOpacity>
          )}
        />



        <View>
          <Button title="Back" onPress={() => navigation.goBack()} type="clear" />
        </View>

      </View>
    </SafeAreaView>

  );
}
export default ManageExpense;