import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/actions/countAction';
const Home = () => {
    const dispatch = useDispatch()
    const count = useSelector((store) => store.count.count)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{count}</Text>
            
            <TouchableOpacity style={styles.btn} onPress={handleIncrement}>
            <Text style={styles.btn_text}>Increment</Text>
</TouchableOpacity>

            <TouchableOpacity style={{...styles.btn,backgroundColor:"#6e3b3b"}} onPress={handleDecrement}>
                <Text style={styles.btn_text}>Decrement</Text>
            </TouchableOpacity>

    
           
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
       alignItems:'center',
        backgroundColor:"fff",
        flexDirection: 'column',
        padding:50
    },
    title_text:{
        fontSize:40,
        fontWeight:"900",
        marginBottom:55
    },
    counter_text:{
        fontSize:35,
        fontWeight:"900",
        margin:15
    },
    btn:{
        backgroundColor:"#086972",
        padding:10,
        margin:10,
        borderRadius:10
    },

    btn_text:{
        fontSize:23,
        color:"#fff"
    }
})

export default Home;