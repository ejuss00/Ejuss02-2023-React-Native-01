import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function MSelectFriends({ closeModal }) {
  const [friends, setFriends] = useState([
    { id: '1', name: 'Friend 1' },
    { id: '2',name: 'Friend 2' },
    { id: '3', name: 'Friend 3' },
    //...
    ]);
    
    return (

        <View style={{ flex: 1 }}>
            <FlatList
            data={friends}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(item.name + ' selected')}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={closeModal}>
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
);
}