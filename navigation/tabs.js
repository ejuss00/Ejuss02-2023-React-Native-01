import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../screens/HomePage";
import HUserProfile from "../screens/HUserProfile";
import HNotificationProfile from "../screens/HNotificationProfile";
import HGroupProfile from "../screens/HGroupProfile";
import HFriendProfile from "../screens/HFriendProfile";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        //component here
        <Tab.Navigator>
            <Tab.Screen name="HUserProfile" component={HUserProfile} />
            <Tab.Screen name="HNotificationProfile" component={HNotificationProfile} />
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="HGroupProfile" component={HGroupProfile} />
            <Tab.Screen name="HFriendProfile" component={HFriendProfile} />
        </Tab.Navigator>
    );
}

export default Tabs;