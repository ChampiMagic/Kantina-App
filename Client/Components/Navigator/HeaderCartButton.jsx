//import other dependencies
import React, {useEffect, useState} from "react";

//import components
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

//import icons
import { AntDesign } from '@expo/vector-icons';

//import hooks
import {useSelector} from 'react-redux'

const HeaderCartButton = ({navigation, color}) => {

    const count = useSelector(state => state.productController.count)   

    console.log(count)

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
                <AntDesign name="shoppingcart" size={35} color="white" />
                {count?
                   <View style={styles.counter}>
                    <Text style={styles.counterText}>{count}</Text>
                   </View>  
                :

                    null
                }
             
            </TouchableOpacity>
        </View>
    )
}

export default HeaderCartButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginRight: 17
    },
    counter: {
        position: "absolute",
        backgroundColor: 'red',
        borderRadius: 50,
        width: 17,
        height: 17,
        justifyContent: 'center',
        alignContent: 'center',
        left: 20
    },
    counterText: {
        alignSelf: 'center',
        fontSize: 10
    }
})