import React , {useState, useEffect}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import { FlatList } from 'react-native-gesture-handler';
// import Ionicons from '@expo/vector-icons/Ionicons';

const WIDTH_MODAL = Dimensions.get('window').width;
const HEIGHT_MODAL = Dimensions.get('window').height;

const SelectFriendModal = (props) => {
    //modal
    const closeModal = (bool, data) => {
        props.changeModalVisibility(bool);
        props.setData(data);
    }

    //checkbox
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getListPhotos();
        return() => {
        }
    }, []);

    getListPhotos = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson);
        }).catch((error) => {
            console.log('Error: ', error)
        })
    }

    renderItem = ({item}) => {
        return(
            <View>
                <Text> {item.title  } </Text>
            </View>
        )
    }

    return (
        <TouchableOpacity
        disabled={true}
        style={styles.container}>    
            <View style={styles.modal}>
                {/* Top Text Container========= */}
              <View style={styles.textView}>

                <Text style={[styles.text1, {fontSize:25, backgroundColor:'#ABCDEF', borderRadius: 50}]} >
                Select Which Friend</Text>
                <Text style={[styles.text2, {backgroundColor:'#C0D9F3'}]}>
                 Sample Sample Sample</Text>

                 {/* FlatList ======= */}
                 <FlatList 
                 style={styles.list}
                 data={data}
                 renderItem={renderItem}
                 keyExtractor ={item => `key-${item.id}`}

                 />
                 <View style = {styles.wrapButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Show item you selected</Text>
                    </TouchableOpacity>
                 </View>

              </View>

              {/* Bottom Buttons ========= */}
              <View style={styles.buttonsView}>
                <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => closeModal(false, 'Cancel')}
                >
                    <Text style={[styles.text, {color: 'blue'} ]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => closeModal(false, 'Ok')}
                >
                    <Text style={[styles.text, {color: 'blue'} ]}>OK</Text>
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
    //flatlist style
    list: {
        flex: 1,
        padding: 10,
    },
    wrapButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding : 16,
        backgroundColor: '#76ADE5',
    },
})

export default SelectFriendModal;
