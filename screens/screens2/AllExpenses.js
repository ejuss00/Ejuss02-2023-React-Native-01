
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

function AllExpenses({ navigation } ) {
  return (
    <SafeAreaView>
        <Text>All Expenses Screen!</Text>
        <Button title="Recent Expenses" onPress={() => navigation.navigate('RecentExpenses')} />
        <Button title="Manage Expense" onPress={() => navigation.navigate('ManageExpense')} />
    </SafeAreaView>
    
  );
}
export default AllExpenses;