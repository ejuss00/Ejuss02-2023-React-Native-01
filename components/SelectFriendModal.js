import React , {useState, useEffect}from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, ActivityIndicator, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
// import CheckBox from '@react-native-community/checkbox';
// import { FlatList } from 'react-native-gesture-handler';
// import Ionicons from '@expo/vector-icons/Ionicons';

const WIDTH_MODAL = Dimensions.get('window').width;
const HEIGHT_MODAL = Dimensions.get('window').height;



//The MAIN MAIN
const SelectFriendModal = (props) => {
    //modal ===
    const closeModal = (bool, data) => {
        props.changeModalVisibility(bool);
        props.setData(data);
    }

    //expo checkbox ===
    const [isChecked, setIsChecked] = useState(false);

    

    //checkbox ===
    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getListPhotos();
        return() => {
        }
    }, []);

    getListPhotos = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/photos';
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson);
        }).catch((error) => {
            console.log('Error: ', error)
        }).finally(() => setisLoading(false))
    }

    onChangeValue = (itemSelected, index) => {
        const newData = data.map(item => {
            if (item.id == itemSelected.id){
                return {
                    ...item,
                    selected: !item.selected
                }
            }
            return {
                ...item,
                selected: item.selected
            }
        })
        setData(newData);
    }

    renderItem = ({item, index}) => {
        return(
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{uri: item.url}}
                    resizeMode='contain'
                />
                <View style={styles.wrapText}>
                <Text> {item.title}</Text>
                <Checkbox
                        // style={styles.checkBox2}
                        // value={isChecked}
                        // disabled={false}
                        // tintColors={{ true: '#4630EB', false: 'gray' }} 
                        // onValueChange={() => {
                        //     setIsChecked(!isChecked);
                        //     onChangeValue(item, index);}}
                        onValueChange={() => onChangeValue(item, index)}
                        />
                </View>
            </View>
        )
    }

    onShowItemSelected = () => {
        const listSelected = data.filter(item => item.selected == true);
        let contentAlert = '';
        listSelected.forEach(item => {
         contentAlert = contentAlert + `${item.id} . ` + item.title + ' \n';
        })
        Alert.alert(contentAlert);
    }


    return (
        <TouchableOpacity
        disabled={true}
        style={styles.container}>    
            <View style={styles.modal}>
                {/* Top Text Container === */}
              <View style={styles.textView}>

                <Text style={[styles.text1, {fontSize:25, backgroundColor:'#ABCDEF', borderRadius: 50}]} >
                Select Which Friend</Text>
                <Text style={[styles.text2, {backgroundColor:'#C0D9F3'}]}>
                 Sample Sample Sample</Text>

                 {/* FlatList === */}
                 {isLoading ? <ActivityIndicator/> :(
                    <FlatList 
                        style={styles.list}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor ={item => `key-${item.id}`}
                    />
                 )}
                 
                 <View style = {styles.wrapButton}>
                    <TouchableOpacity style={styles.button} onPress={onShowItemSelected}>
                        <Text>Show item you selected</Text>
                    </TouchableOpacity>
                 </View>

              </View>

              {/* Bottom Buttons === */}
              <View style={styles.buttonsView}>
                <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => closeModal(false, 'Cancel')}
                >
                    <Text style={[styles.text1, {color: 'blue'} ]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => closeModal(false, 'Ok')}
                >
                    <Text style={[styles.text1, {color: 'blue'} ]}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    modal: {
        height: HEIGHT_MODAL - 50,
        width: WIDTH_MODAL - 50,
        paddingTop: 10,
        backgroundColor: '#DEEBF9',
        borderRadius:10,
    },
    textView: {
        flex: 1,
        alighItems: 'center',
    },
    text1: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text2: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonsView:{
        width: '100%',
        flexDirection: 'row',
    },
    TouchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    //flatlist style ===
    list: {
        flex: 1,
        padding: 10,
    },
    wrapButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
    },
    button: {
        padding : 16,
        backgroundColor: '#76ADE5',
    }, 
    item :{
        flexDirection: 'row',
        marginTop: 8,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 150,
    },
    wrapText: {
        flex: 1,
        marginTop: 16,
        marginLeft: 8,
    },
    //expo-checkbox ===
      checkBox2: {
        width: 15,
        height: 15,
        margin: 5,
      },
})

export default SelectFriendModal;
