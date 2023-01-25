import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


function SelectFriendBill() {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text >Select Friend!</Text>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default SelectFriendBill;
