import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


import MSelectFriendModal from '../components/MSelectFriendModal';


function HFriendProfile() {

    const [isModalVisible, setisModalVisible] = useState(false);
    const [chooseData, setchooseData] = useState();
    const [friendList, setFriendList] = useState([]);
    const [uniqueId, setUniqueId] = useState(1);

    const addFriend = () => {
        setFriendList([...friendList, { key: uniqueId, name: 'Friend ' + uniqueId }]);
        setUniqueId(uniqueId + 1);
    }


    const changeModalVisibility = (bool) => {
        setisModalVisible(bool);
    }

    const setData = (data) => {
        setchooseData(data);
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
                    >Friends</Text>
                    <Ionicons name='ios-add' size={30} color='#6495ED'
                        onPress={() => addFriend()}
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

                    {/* Flatlist of friendlist */}
                    <FlatList
                        data={friendList}
                        keyExtractor={(item) => item.key.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.friendContainer}>
                                <Text style={styles.friendName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>
                <Text style={[styles.text, { display: 'none' }]}>
                    {chooseData} {/* This grab the data from OK or Cancel 'closeModal: (bool: any, data: any)' from SelectFriendModal */}
                    {/*Why I do this? Just in case :D */}
                </Text>
                <TouchableOpacity onPress={() => changeModalVisibility(true)} style={styles.buttonLowerContainer}>
                    <Ionicons style={styles.createButton} name="ios-wallet-outline" size={32} color="white" />
                </TouchableOpacity>
            </View>



            <Modal
                transparent={true}
                animationType='slide'
                visible={isModalVisible}
                onRequestClose={() => changeModalVisibility(false)}
            >
                <MSelectFriendModal
                    changeModalVisibility={changeModalVisibility}
                    setData={setData} />
            </Modal>
        </ SafeAreaView >

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
