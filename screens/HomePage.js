import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


function HomePage() {
    return (
        <SafeAreaView>
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <Text className="text-[#438FDC] text-4xl font-semibold text-center">Orijin</Text>
                </View>
            </View>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        padding: 0,
        backgroundColor: 'lightgrey',
    },
});

export default HomePage;
