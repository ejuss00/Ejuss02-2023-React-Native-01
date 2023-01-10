import { useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import SelectFriendModal from '../components/SelectFriendModal';


// function HomePage() {
//     return (
//         <SafeAreaView>
//             <View style={styles.appContainer}>
//                 <View style={styles.inputContainer}>
//                     <Text className="text-[#438FDC] text-3xl font-semibold text-center">Split Bill</Text>
//                 </View>
//                 <View>
//                     <TextInput style={styles.input} placeholder="Insert Bill" />
//                 </View>
//             </View>
//             <Ionicons name="md-checkmark-circle" size={32} color="green" />
//         </SafeAreaView>
//     );
// }

// const [modalVisible, setModalVisible] = useState(false);



const HomePage = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  }

  const setData = (data) => {
    setchooseData(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {display:  'none'}]}>
        {chooseData} {/* This grab the data from OK or Cancel 'closeModal: (bool: any, data: any)' from SelectFriendModal */}
        {/*Why I do this? Just in case :D */}
      </Text>
      <TouchableOpacity onPress={() => changeModalVisibility(true)} style={styles.TouchableOpacity}>
        <Text style={[styles.text, {textAlign: 'center', paddingTop: 50}]}> Modal Click to Create New Bill</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}>

        <SelectFriendModal
          changeModalVisibility={changeModalVisibility}
          setData={setData}
          />
        </Modal>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
  

