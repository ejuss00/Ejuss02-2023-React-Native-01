import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';


function SelectFriendBill({ route, navigation, navigation: { goBack } }) {
    const { itemId, otherParam } = route.params;

    //
    // const [friendList, setFriendList] = useState(navigation.getParam('friendList'));
    // const [selectedFriends, setSelectedFriends] = useState([]);
    // const handleFriendPress = (friend) => {
    //     const newSelectedFriends = [...selectedFriends];
    //     const index = newSelectedFriends.findIndex((f) => f.key === friend.key);
    //     if (index === -1) {
    //       newSelectedFriends.push(friend);
    //     } else {
    //       newSelectedFriends.splice(index, 1);
    //     }
    //     setSelectedFriends(newSelectedFriends);
    //   };
    
    //   const displayCheckedFriends = () => {
    //     console.log(selectedFriends);
    //   };
      //


    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text >Select Friend!</Text>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />

                <Text>itemId: { JSON.stringify(itemId)}</Text>
                <Text>otherParam: { JSON.stringify(otherParam)}</Text>
                <Button title="Go To SelectFriendCheck Again... " onPress={() => navigation.push('SelectFriendCheck', { 
                    itemId: Math.floor(Math.random() * 100), 
                })}/>
                <Button title="Back! "
                    stlye = {styles.test1}
                     onPress={() => goBack()}/> 

                     {/* seperation start */}
{/* 
                     <FlatList
                        data={friendList}
                        keyExtractor={(item) => item.key.toString()}
                        renderItem={({ item }) => (
                        <View style={styles.friendContainer}>
                            <Checkbox 
                            value={selectedFriends.find((f) => f.key === item.key) ? true : false}
                            onValueChange={() => handleFriendPress(item)}
                            />
                            <Text style={styles.friendName}>{item.name}</Text>
                        </View>
                        )}
                        />
                        <Button
                            title="Display Checked Friends"
                            onPress={displayCheckedFriends}
                        /> */}
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    test1: {
        marginTop: 20,
    }
  });

export default SelectFriendBill;