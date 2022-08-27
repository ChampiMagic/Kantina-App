import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//import icons
import { AntDesign } from '@expo/vector-icons';


const ShoppingCard = ({_id, image, title, price}) => {

    return (
        <View style={styles.cardContainer} key={_id}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: image }} resizeMode='cover' style={styles.img}/>
                <TouchableOpacity style={styles.icon}>
                     <AntDesign  name="pluscircleo" size={30} color="black" />
                </TouchableOpacity>
               
            </View>
            <View style={styles.details}>
                <Text style={styles.price}>$ {price}</Text>
                <Text style={styles.description}>{title}</Text>
            </View>
        </View>
    )
}


export default ShoppingCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: '#d0d0d0',
        borderRadius: 5,
        borderWidth: 1,
        width: '42%',
        maxWidth: '44%',
        height: 210,
        margin: 5,
    },
    imgContainer: {
    
    },
    img: {
        width: '100%',
        height: 100
    },
    icon: {
        position: 'absolute',
        left: '75%',
        top: 5,
    },
    details: {
        paddingHorizontal: 10
    },
    price: {
        fontWeight: '600',
        fontSize: 20
    },
    description: {
        color: "#a0a0a0",
        fontSize: 15
    }
})