//import other dependencies
import React from "react";

//import components
import { View, TouchableOpacity, StyleSheet } from "react-native";

//import icons
import { AntDesign } from '@expo/vector-icons';

const HeaderCartButton = ({navigation, color}) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <AntDesign name="shoppingcart" size={35} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderCartButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginRight: 17
    }
})