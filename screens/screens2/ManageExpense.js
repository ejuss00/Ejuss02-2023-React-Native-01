import { Text, View, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useState } from 'react';

const TopTab = createMaterialTopTabNavigator();

function ManageExpense({ route, navigation }) { // [][][][][][]  the MANAGE EXPENSES SCREEN [][][][][][] 
  const { filteredData } = route.params;

  function SplitEvenlyScreen() {
    //calculate total bill
    const [billAmount, setBillAmount] = useState('');
    const [dividedAmount, setDividedAmount] = useState(0);

    return (
      <View style={styles.evenlySplitCont}>
        <Text style={styles.equalText}>Split Equally</Text>
        <View style={styles.equalCon2}>
          <TextInput
            value={billAmount}
            onChangeText={(text) => setBillAmount(text)}
            placeholder="Enter the bill amount"
            keyboardType='numeric'
            style={styles.equalTextInput}
          />
          <Text style={styles.equalOutputDividedText}>Divided Amount : RM {dividedAmount}</Text>
          <Button
            title="Divide bill"
            buttonStyle={styles.equalButton}
            onPress={() => {
              if (filteredData.length > 0) {
                let divided = billAmount / filteredData.length;
                divided = Math.round(divided * 100) / 100;
                setDividedAmount(divided);
                filteredData.forEach((friend) => {
                  friend.debt += divided;
                });
              } else {
                alert("No friend in the list")
              }
            }}
          />
        </View>
      </View>
    );
  }

  function ExactAmountSplitScreen() {
    const [amountExactBill, setExactAmount] = useState({});

    let totalAmount = 0;
    const handleAmountChange = (index, value) => {
      setExactAmount({ ...amountExactBill, [index]: value });
    };

    filteredData.forEach((friend, index) => {
      if (amountExactBill[index]) {
        totalAmount += parseFloat(amountExactBill[index]);
      }
    });

    return (
      <View style={styles.ExactAmountSplitCont}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>
            Total amount: {totalAmount.toFixed(2)}
          </Text>
        </View>
        <ScrollView>
          {filteredData.map((friend, index) => (
            <View key={index} style={{ padding: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>{friend.name}</Text>
              <TextInput
                value={amountExactBill[index]}
                onChangeText={text => handleAmountChange(index, text)}
                keyboardType='numeric'
                placeholder="Enter amount"
              />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            filteredData.forEach((friend, index) => {
              if (amountExactBill[index]) {
                friend.debt = parseFloat(friend.debt) + parseFloat(amountExactBill[index]);
              }
            });
            navigation.goBack();
          }}
        >
          <Text style={{ padding: 20, fontWeight: 'bold' }}>Comfirm Bill Amount</Text>
        </TouchableOpacity>
      </View>
    );
  }

  //[][][][][][]  the MANAGE EXPENSE render [][][][][][] 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topTabContainer}>
        <TopTab.Navigator
          style={styles.topTabNavContainer}
          screenOptions={({ route }) => ({
            tabBarLabel: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Split Evenly') {
                iconName = focused ? 'reorder-two' : 'reorder-two-outline';
              }
              else if (route.name === 'Exact Amount Split') {
                iconName = focused ? 'pencil' : 'pencil-outline';
              }
              return <Ionic name={iconName} size={size} color={color} />;
            },
          })}>
          <TopTab.Screen name="Split Evenly" component={SplitEvenlyScreen} />
          <TopTab.Screen name="Exact Amount Split" component={ExactAmountSplitScreen} />
        </TopTab.Navigator>

        <View style={styles.bottomContainer}>
          <Text style={styles.bHeader}> Contact Info </Text>
          <FlatList
            style={styles.bFlatList}
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.bTouchOpacity}
                onPress={() => navigation.navigate('FriendProfile', {
                  name: item.name,
                  age: item.age,
                  email: item.email,
                  debt: item.debt
                })}>
                <Text style={styles.bTextDebt}>{item.name} Debt : RM{item.debt}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.bBackButtonCon}>
            <Button title="Back" onPress={() => navigation.goBack()} type="clear" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}



// [][][][][][][][][][][][][][][][][][][][][][][][]
// [][]                                        [][]
// [][]             Style                      [][]
// [][]                                        [][]
// [][][][][][][][][][][][][][][][][][][][][][][][]



const styles = StyleSheet.create({
  topTabContainer: {
    flex: 1,
  },
  topTabNavContainer: {
  },

  // [][] Split Evenly Section
  evenlySplitCont: {
    flex: 1,
  },
  equalText: {
    width: 200,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'cyan'
  },
  equalCon2: {

  },
  equalTextInput: {
    color: 'black',
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
  },
  equalOutputDividedText: {
    alignSelf: 'center',
  },
  equalButton: {
    backgroundColor: '#7EB2E7',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    width: 200,
    alignSelf: 'center',
  },

  // [][] Exact Amount Section
  ExactAmountSplitCont: {
    flex: 1,
    backgroundColor: '#b0c4de'
  },

  // [][] Bottom Section
  bottomContainer: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  bHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  bFlatList: {
    // flex: 1,
    backgroundColor: `#add8e6`,
  },
  bTouchOpacity: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  bTextDebt: {
    fontSize: 15,
    fontWeight: '350',


  },
  bBackButtonCon: {
    padding: 10,
  },
});

export default ManageExpense;