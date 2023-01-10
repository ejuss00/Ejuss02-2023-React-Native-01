import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';

const WIDTH_MODAL = Dimensions.get('window').width;
const HEIGHT_MODAL = Dimensions.get('window').height;

const SelectFriendModal = (props) => {
    
    const closeModal = (bool, data) => {
        props.changeModalVisibility(bool);
        props.setData(data);
    }

    return (
        <TouchableOpacity
        disabled={true}
        style={styles.container}>    
            <View style={styles.modal}>
              <View style={styles.textView}>
                <Text style={[styles.text, {fontSize:25}]} >Select Which Friend</Text>
                <Text style={styles.text}> Sample Sample Sample</Text>
              </View>
              <View style={styles.buttonsView}>
                <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => closeModal(false, 'Cancel')}
                >
                    <Text style={[styles.text, {color: 'blue'} ]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => closeModal(false, 'Ok')}
                >
                    <Text style={[styles.text, {color: 'blue'} ]}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        height: HEIGHT_MODAL - 50,
        width: WIDTH_MODAL - 50,
        paddingTop: 10,
        backgroundColor: '#DEEBF9',
        borderRadius:10,
    },
    textView: {
        flex: 1,
        alighItems: 'center',
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonsView:{
        width: '100%',
        flexDirection: 'row',
    },
    TouchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    }
})

export default SelectFriendModal;
