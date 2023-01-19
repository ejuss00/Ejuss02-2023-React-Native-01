import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

function FriendProfile({ route, navigation }) {
  const { name, age, email, debt } = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text>Name: {JSON.stringify(name)}</Text>
        <Text>Age: {JSON.stringify(age)}</Text>
        <Text>Email: {JSON.stringify(email)}</Text>
        <Text>Debt: RM{JSON.stringify(debt)}</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

export default FriendProfile;