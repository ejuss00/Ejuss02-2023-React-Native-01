import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

function ManageExpense( { navigation } ) {
  return (
    <SafeAreaView >
      <Text>Manage Expense Screen!</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
    
  );
}
export default ManageExpense;