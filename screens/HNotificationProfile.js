import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


function HNotificationProfile() {
    return (
        <SafeAreaView>
            <View>
                <Text>Hello, Notification Page!</Text>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
        </SafeAreaView>
    );
}

export default HNotificationProfile;
