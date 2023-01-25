import { Text, View, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

function AllExpenses({ navigation }) {

    const [friendData, setFriendData] = useState([{
        id: '',
        name: '',
        age: '',
        email: '',
        debt: ''
    }
    ]);

    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        debt: ''
    });
    //remove empty element
    const filteredData = friendData.filter(friend => friend.name !== '');

    const checkInput = () => {
        if (newFriend.name === '' || newFriend.age === '' || newFriend.email === '') {
            Alert.alert(
                'Error',
                'Please fill in all fields',
                [
                    { text: 'OK', onPress: () => console.log('Unfilled Text, Rejected for retry') },
                ],
                { cancelable: false },
            );
        } else {
            setFriendData([...friendData, {
                id: friendData.length + 1,
                name: newFriend.name,
                age: newFriend.age,
                email: newFriend.email,
                debt: newFriend.debt
            }])
            setNewFriend({
                name: '',
                age: '',
                email: '',
                debt: ''
            })
        }
    };



    return (
        <SafeAreaView style={styles.container1} >
            <Text style={styles.header}> Friend And Expenses</Text>
            <View style={styles.container2}>

                <Text style={styles.textContainer2}> Add Contact </Text>
                <View style={styles.ProfilePic}>
                    <Ionic name="md-person-sharp" size={30} color="grey" style={{ transform: [{ translateX: 10 }, { translateY: 8 }] }} />
                </View>
                <TextInput
                    value={newFriend.name}
                    onChangeText={(insert) => setNewFriend({ ...newFriend, name: insert })}
                    placeholder="Enter friend's name"
                    style={styles.textInputFriend}
                />
                <TextInput
                    value={newFriend.age}
                    onChangeText={(insert) => setNewFriend({ ...newFriend, age: parseFloat(insert) })}
                    placeholder="Enter friend's age"
                    style={styles.textInputFriend}
                />
                <TextInput
                    value={newFriend.email}
                    onChangeText={(insert) => setNewFriend({ ...newFriend, email: insert })}
                    placeholder="Enter friend's email"
                    style={styles.textInputFriend}
                />
                <TextInput
                    value={newFriend.debt}
                    onChangeText={(insert) => setNewFriend({ ...newFriend, debt: parseFloat(insert) })}
                    placeholder="Enter friend's debt"
                    style={styles.textInputFriend}
                />

                <Button
                    title="Add Friend"
                    type="outline"
                    onPress={() => {

                        checkInput();
                    }}
                    buttonStyle={{
                        borderColor: 'rgba(78, 116, 289, 1)',
                    }}
                    // type="outline"
                    raised
                    titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={{
                        width: 200,
                        alignSelf: 'center',
                        marginVertical: 15,
                    }}
                />
            </View>

            {/* List Friend Mula kat sini */}
            <View style={styles.container3}>
                <Text style={styles.contactListTitle}>Contact</Text>
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item.id}
                    style={styles.flatlistFriendsListBox}

                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {
                            name: item.name,
                            age: item.age,
                            email: item.email,
                            debt: item.debt
                        })}>
                            <Text style={styles.flatlistFriendsList}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <Button
                    title="Calculate Split Bill"
                    style={styles.buttonCalculateSplitBill}
                    buttonStyle={{
                        margin: 20,
                        borderWidth: 2,
                        borderRadius: 30,
                        width: 150,
                        height: 50,
                        alignSelf: 'center',

                    }}
                    onPress={() => {
                        navigation.navigate('ManageExpense', {
                            filteredData: filteredData,
                        })
                    }}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container1: {
        flexDirection: 'column',
        flex: 1,
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: '400',
    },
    container2: {
        backgroundColor: '#BCD7F3',
        paddingVertical: 5,
    },
    textContainer2: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: '400'
    },
    ProfilePic: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'grey',
        marginBottom: 10,

    },
    // Add Friend Text Input Section
    textInputFriend: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        width: '100%',
        height: 40,
        paddingLeft: 20,
        alignSelf: 'flex-start'
    },
    buttonAddFriend: {
        margin: 20,
    },
    // List Friend Contact Section
    container3: {
        backgroundColor: 'white',
        flex: 1,
        overflow: 'hidden',
    },
    contactListTitle: {
        fontSize: 20,
        color: 'grey',
        marginTop: 15,
        marginLeft: 20,

    },
    flatlistFriendsListBox: {
        flex: 1,
        // backgroundColor: 'red',
        overflow: 'scroll',
    },
    flatlistFriendsList: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,

    },
    buttonCalculateSplitBill: {
        borderRadius: 50,
        width: 120,
        height: 120,
    }
});

export default AllExpenses;