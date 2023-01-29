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
      <View style={styles.exactAmountSplitCont}>
        <View style={styles.exactCon2}>
          <Text style={styles.exactTextTotal}>
            Total amount: {totalAmount.toFixed(2)}
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          {filteredData.map((friend, index) => (
            <View key={index} style={styles.exactScrollList}>
              <Text style={{ fontWeight: 'bold' }}>{friend.name}</Text>
              <TextInput
                style={styles.ExactTextInput}
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
          <Text style={styles.ComfirmExactButton}>Comfirm Bill</Text>
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
                <Text style={styles.bTextDebt}>{item.name} debt : RM{item.debt}</Text>
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
    fontSize: 20,
    width: 350,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#38B6FF',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  equalCon2: {
    flex: 1,
  },
  equalTextInput: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
  },
  equalOutputDividedText: {
    alignSelf: 'center',
  },
  equalButton: {
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    width: 200,
    alignSelf: 'center',
  },
  eBackgroundArt: {
  },

  // [][] Exact Amount Section
  exactAmountSplitCont: {
    flex: 1,
    backgroundColor: `#dcdcdc`,
  },
  exactCon2: {
    padding: 20,
    borderColor: `#4169e1`,
    borderWidth: 2,
  },
  scrollViewCon: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  exactTextTotal: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  exactScrollList: {
    paddingHorizontal: 20,
  },
  ExactTextInput: {
    fontSize: 20,
    backgroundColor: 'white',
  },
  scrollContentContainer: {
    // backgroundColor: 'red',
    paddingTop: 10,
  },
  ComfirmExactButton: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#38B6FF',
    borderRadius: 25,
    borderColor: 'transparent',
    padding: 10,
    marginBottom: 5,
  },

  // [][] Bottom Section
  bottomContainer: {
    flex: 1,
    backgroundColor: `#87cefa`,

  },
  bHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  bFlatList: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  bTouchOpacity: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    borderRadius: 10,
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