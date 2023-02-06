import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


function SplitTransaction({ navigation }) {

    // const [billAmount, setBillAmount] = useState('');
    // const [billTitle, setBillTitle] = useState('');
    const [transactionBill, setTransactionBill] = useState([{
        bill: '',
        title: '',
    }
    ]);

    const checkInput = () => {
        if (transactionBill.bill === '' || transactionBill.title === '') {
            Alert.alert(
                'Error',
                'Please fill in all fields',
                [
                    { text: 'OK', onPress: () => console.log('Unfilled Text, Rejected trasaction for retry') },
                ],
                { cancelable: false },
            );
        } else {
            setTransactionBill({
                bill: '',
                title: '',
            })
            navigation.navigate('AllExpenses');
            console.log('•Bill: RM', transactionBill.bill, ',  •Title: ', transactionBill.title,)
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Text>Bill Amount:</Text>
                <TextInput
                    value={transactionBill.bill}
                    onChangeText={(insert) => setTransactionBill({ ...transactionBill, bill: insert })}
                    placeholder="Enter the bill amount"
                    keyboardType='numeric'
                />
                <Text>Bill Title:</Text>
                <TextInput
                    value={transactionBill.title}
                    onChangeText={(insert) => setTransactionBill({ ...transactionBill, title: insert })}
                    placeholder="Enter the bill title"
                />
            </View>
            <Button title="Proceed" onPress={() => { checkInput() }} />
            <Button title="(Temp) Next Button" onPress={() => { navigation.navigate('AllExpenses') }} />
        </SafeAreaView>

    );
}
export default SplitTransaction;