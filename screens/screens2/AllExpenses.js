import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

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

    // const friendList = [setFriendData]

    return (
        <SafeAreaView>
            <View>
                <Text>All Expenses Screen!</Text>
                <TextInput
                    value={newFriend.name}
                    onChangeText={(text) => setNewFriend({ ...newFriend, name: text })}
                    placeholder="Enter friend's name"
                />
                <TextInput
                    value={newFriend.age}
                    onChangeText={(text) => setNewFriend({ ...newFriend, age: text })}
                    placeholder="Enter friend's age"
                />
                <TextInput
                    value={newFriend.email}
                    onChangeText={(text) => setNewFriend({ ...newFriend, email: text })}
                    placeholder="Enter friend's email"
                />
                <TextInput
                    value={newFriend.debt}
                    onChangeText={(text) => setNewFriend({ ...newFriend, debt: text })}
                    placeholder="Enter friend's debt"
                />

                <Button
                    title="Add Friend"
                    type="outline"
                    onPress={() => {
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
                    }}
                />
            </View>

            {/* List Friend Mula kat sini */}
            <View>
                <Text>== List of Friends ==</Text>
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
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <Button
                    title="Calculate Split Bill"

                    onPress={() => {
                        navigation.navigate('ManageExpense', {
                            friendData: friendData,
                        })
                    }}
                />
            </View>

        </SafeAreaView>

    );
}
export default AllExpenses;