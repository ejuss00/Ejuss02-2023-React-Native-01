import React , {useState}from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';

import { Button } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';

import MSelectFriends from '../components/MSelectFriends';


export default function HFriendProfile() {
    const [friendList, setFriendList] = useState([]);
    const [uniqueNumber, setUniqueNumber] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
  
    const addFriend = () => {
      setFriendList([...friendList, { name: 'Friend ' + uniqueNumber }]);
      setUniqueNumber(uniqueNumber + 1);
    }
  
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Friend/User List</Text>
          <Button
            title="Add Friend"
            onPress={() => {
              addFriend();
            }}
          />
        </View>
  
        <FlatList
          data={friendList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.friendContainer}>
              <Text style={styles.friendName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.buttonCreateBill}>
        <TouchableOpacity
                style={{ position: 'absolute', bottom: 20, right: 20 }}
                onPress={() => setModalVisible(true)}
            >
            <Ionicons name="md-wallet" size={32} color="green" style={{ width: 40, height: 40 }}/>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <MSelectFriends
                closeModal={() => setModalVisible(false)}
                />
            </Modal>
        </View>

        
      </View>
      
    );
  }
  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    friendContainer: {
      padding: 10,
      alignItems: 'center',
      width: '33%',
      backgroundColor: '#4285F4',
    },
    friendName: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    buttonCreateBill: {
        position: 'relative',
        backgroundColor: 'Azure',
    }
  });


