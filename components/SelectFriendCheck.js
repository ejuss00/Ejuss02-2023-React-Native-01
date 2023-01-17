import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const SelectFriendModal = () => {


    //
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.containerMain}>
            <View style={styles.container2}>
                {/* Top Text Container========= */}
                <Text>SELECT A FRIEND TO SPLIT BILL</Text>

                {/*Bottom Button */}
            </View>
        </TouchableOpacity>

    );
    }

//stylesheet
const styles = StyleSheet.create({

})

export default SelectFriendModal;
