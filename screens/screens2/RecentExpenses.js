import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

function RecentExpenses( { navigation } ) {
  return (
    <SafeAreaView> 
        <Text>Recent Expenses Screen!</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
    
  );
}
export default RecentExpenses;