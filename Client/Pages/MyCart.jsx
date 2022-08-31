//import other dependencies
import React, {useState, useEffect} from "react";

//import components
import { View, Text, StatusBar, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CartProductCard from "../Components/MyCartPage/cartProductCard";

//import hooks
import { useSelector } from "react-redux";

//import icons
import { AntDesign } from '@expo/vector-icons';

const MyCart = () => {

    const [productsArr, setProductsArr] = useState([])

    const products = useSelector(state => state.productController.products)

    useEffect(() => {
        const objArr = []

        Object.keys(products).map((key) => {
           objArr.push(products[key])

        })

        setProductsArr(objArr)

    }, [products])

    console.log(productsArr[0].price)

    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
           

            <FlatList
               ListHeaderComponent={() => ( <Text style={{alignSelf: 'center', fontSize: 35, margin: 10, fontWeight: '300' }}>MY PRODUCTS</Text>)}
               data={productsArr}
               renderItem={({item}) => <CartProductCard _id={item._id} image={item.image} title={item.title} price={item.price} count={item.count}/>}
               numColumns={1}
               ListFooterComponent={() => (
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalPrice}>TOTAL: ${productsArr.reduce((prev, curr) => prev + (curr.price * curr.count) , 0)}</Text>
                        <TouchableOpacity style={styles.icon} onPress={() => console.log("Buy!!!")}>
                                <AntDesign name="checkcircle" size={60} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
               />
            
            
        </View>
    )
}

export default MyCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalContainer: {
        alignSelf: 'center'
    },
    totalPrice: {
        fontSize: 45,
        fontWeight: '300'
    },
    icon: {
        alignSelf: 'center',
        marginVertical: 15
    }
})