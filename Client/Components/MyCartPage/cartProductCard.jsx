//import other dependencies
import React from "react";

//import components
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";

//import icons
import { AntDesign } from '@expo/vector-icons';

//import actions
import { deleteProduct } from '../../Redux/slices/productsSlice.js'

//import hooks
import { useDispatch } from "react-redux";

const CartProductCard = ({_id, image, price, title, count}) => {

    const dispatch = useDispatch()

    return (
        <View style={styles.cardContainer} key={_id}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: image }} resizeMode='cover' style={styles.img}/>
                <TouchableOpacity style={styles.icon} onPress={() => dispatch(deleteProduct({_id}))}>
                        <AntDesign  name="minuscircleo" size={30} color="black" />
                </TouchableOpacity>
            
            </View>
            <View style={styles.details}>
                <Text style={styles.price}>$ {price}</Text>
                <Text style={styles.price}>Count: {count}</Text>
                <Text style={styles.description}>{title}</Text>
            </View>
        </View>
    )
}

export default CartProductCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: '#d0d0d0',
        borderRadius: 5,
        borderWidth: 1,
        width: '90%',
        height: 210,
        marginVertical: 10,
        alignSelf: 'center'
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