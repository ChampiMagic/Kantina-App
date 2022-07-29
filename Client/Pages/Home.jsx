import React, { useEffect, useState } from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../Redux/slices/CounterSlice";


const Home = ({ navigation }) => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
           <StatusBar
            animated={true}
            barStyle='light-content'
            />
                <Text style={{ color: 'red', alignSelf:'center', marginBottom: 20 }}>{count}</Text>
                <Button 
                title="+ 1"
                onPress={() => dispatch(increment())}
                />
                 <Button 
                title="- 1"
                onPress={() => dispatch(decrement())}
                />
                
        </View>
    )
}

export default Home;