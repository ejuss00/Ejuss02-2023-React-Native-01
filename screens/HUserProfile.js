import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function HUserProfile() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginTop: 40,
        backgroundColor: '#333',
    },
    boxOne: {

        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {

        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {

        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour: {

        backgroundColor: 'skyblue',
        padding: 40,
    },
});


export default HUserProfile;
