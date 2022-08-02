import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";



const ShoppingCard = ({URI}) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: URI }} resizeMode='cover' style={styles.img}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.price}>$ 150</Text>
                <Text style={styles.description}>Manzana Roja x 1 unidad</Text>
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