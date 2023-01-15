import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';

const WIDTH_MODAL = Dimensions.get('window').width;
const HEIGHT_MODAL = Dimensions.get('window').height;

const MSelectFriendModal = (props) => {
    //modal 
    const closeModal = (bool, data) => {
        props.changeModalVisibility(bool);
        props.setData(data);
    }

    //useState
    const [data, setData] = useState([]);

    //
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.containerMain}>
            <View style={styles.modal}>
                {/* Top Text Container========= */}
                <Text>SELECT A FRIEND TO SPLIT BILL</Text>

                {/*Bottom Button */}

                <View style={styles.buttonBottom}>
                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => closeModal(false, 'Cancel')}
                    >
                        <Text style={[styles.text, { color: 'blue' }]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => closeModal(false, 'Ok')}
                    >
                        <Text style={[styles.text, { color: 'blue' }]}>OK</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>

    );
}

//stylesheet
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'gray',
    },
    modal: {
        height: HEIGHT_MODAL - 50,
        width: WIDTH_MODAL - 50,
        paddingTop: 10,
        backgroundColor: '#DEEBF9',
        borderRadius: 10,
    },
    TouchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    //bottom button
    buttonBottom: {
        width: '100%',
        flexDirection: 'row',
    },
    //flatlist style

})

export default MSelectFriendModal;
