import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function HNotificationProfile() {
    return (
        <View>
            <Text>Hello, Notification Page!</Text>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
    );
}

export default HNotificationProfile;
