import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomePage() {
    return (
        <SafeAreaView>
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <Text className="text-[#438FDC] text-4xl font-semibold text-center">Orijin</Text>
                </View>
                <View style={styles.container2}>
                    <Image
                        source={require('../assets/ppower.png')}
                        style={styles.profileImage2}
                    />
                    <Text className="text-[#5499DF] text-5xl font-semibold">User1</Text>
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
        backgroundColor: '#D4E5F7',
        justifyContent: 'center',
    },
    inputContainer: {
        padding: 0,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        
      },
      profileImage2: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'blue',
      },
});

export default HomePage;
