import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';


function HFriendProfile({ navigation, navigation: { navigate } }) {


    const [friendList, setFriendList] = useState([]);
    const [uniqueId, setUniqueId] = useState(1);

    const handleAddFriend = () => {
        setFriendList([...friendList, { key: uniqueId, name: 'Friend ' + uniqueId }]);
        setUniqueId(uniqueId + 1);
    }

    return (
        <SafeAreaView style={styles.containerRoot}>
            <View style={styles.containerMain}>
                <View style={styles.container1}>
                    <Text style={{ flex: 1 }}></Text>
                    <Text style={{
                        flex: 10,
                        color: `#000000`,
                        fontSize: 20,
                        textAlign: 'center',
                        paddingTop: '2%',
                    }}
                    >THIS IS NOW NOTIFICATION</Text>
                    <Ionicons name='ios-add' size={30} color='#6495ED'
                        onPress={() => handleAddFriend()}
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }} />
                </View>
                <View style={styles.container2}>
                    <TextInput style={styles.textInput} placeholder="Search Friend" />
                    <Text style={[styles.friendTitle, { display: 'none' }]}
                    >Hello, Friend Page!</Text>

                    <Button title="Go to SelectFriendCheck" onPress={() => navigation.navigate('SelectFriendCheck', {
                        friendList: 86,
                        otherParam: 'anything you want here',
                        // friendList: friendList
                    })} />


                    {/* Flatlist of friendlist */}
                    <FlatList
                        data={friendList}
                        keyExtractor={(item) => item.key.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.friendContainer}>
                                <Text style={styles.friendName}>
                                    {item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={[styles.textInput, { display: "none" }]}>
                </Text>
                {/* <TouchableOpacity onPress={() => navigate('SelectFriendCheck')} style={styles.buttonLowerContainer}>
                    <Ionicons style={styles.createButton} name="ios-wallet-outline" size={32} color="white" />
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    containerRoot: {
        flex: 1,
        backgroundColor: `#f0f8ff`,
    },
    containerMain: {
        flex: 1,
        paddingHorizontal: 10,

    },
    container1: {
        width: '100%',
        height: '7%',
        borderColor: `gray`,
        borderBottomWidth: 0.7,
        marginTop: 10,
        flexDirection: 'row',
    },
    container2: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    textInput: {
        height: 40,
        borderColor: `gray`,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: `#f0f8ff`,
    },
    friendTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: `gray`,

    },
    friendContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#778899',
        margin: 7,
        padding: 10,
    },
    friendName: {

    },
    buttonLowerContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: 50,
        height: 50,
        zindex: 5,
        alignSelf: 'center',
        backgroundColor: `#32cd32`,
        borderRadius: 50,
    },
    createButton: {
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default HFriendProfile;