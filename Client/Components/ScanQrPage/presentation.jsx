//import components
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, Alert } from "react-native";

//import hooks
import { useEffect, useState } from "react";
import useDeletePurchase from "../../Utils/Hooks/useDeletePurchase";

//env variable
import { BACKEND_URL } from "@env"


const Presentation = ({user}) => {

   const [purchases, setPurchases] = useState([])
   const [orders, setOrders] = useState(0)

    useEffect(() => {
        const actualDate = new Date()
        const year =  actualDate.getFullYear()
        const month =  actualDate.getMonth() + 1
        const day =  actualDate.getDate()

        const todayPurchases = []

        user.purchases.forEach((p) => {
            const date = new Date(p.date)
            
            if(date.getFullYear()  === year && date.getMonth() + 1  === month && date.getDate()  === day) {
                todayPurchases.push(p)
            }
        })
        
        setOrders(todayPurchases.length)
        setPurchases(todayPurchases)
    }, [])

    const onDelivered = async (purchaseId) => {

        const {message, error} = await useDeletePurchase(purchaseId)

        if(error){
            Alert.alert("Error", error)
        } else {
            setOrders(orders - 1)
            setPurchases(purchases.filter(p => p._id !== purchaseId))
        }
        
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userContaienr}>
                <Image style={styles.image} source={{ uri: (BACKEND_URL || `http://192.168.0.103:3005/api/`)+`privateAWS/${user.imageKey}` }}/>
                <Text style={styles.name}>{user.name}</Text>
            </View>

            <Text style={{alignSelf: 'center', fontSize: 25}}>orders left {orders}</Text> 
            <View>
               {
                purchases.map(p  => (
                    <View key={p._id} style={styles.purchaseContainer}>
                        <Text style={{alignSelf: 'center'}}>Pedido ID: {p._id}</Text>
                        <View style={styles.itemsContainer}>
                            {
                                p.products?.map(productData => (
                                    <View key={productData._id} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                                        <View>
                                            <Text >{productData.product.name}</Text>
                                            <Text >Amount: {productData.count}</Text>
                                        </View>
                                        
                                        <Image style={{width: 100, height: 100}} source={{ uri: productData.product.image}}/>
                                    </View>
                                ))
                            }
                        </View>
                        <TouchableOpacity style={styles.completeButton} onPress={() => onDelivered(p._id)}>
                            <Text style={{fontSize: 20, fontWeight: '300', color: '#fff'}}>Complete</Text>
                        </TouchableOpacity>
                    </View>
                ))
               }
               
            </View>
          
           
        </ScrollView>
    )
}

export default Presentation;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 180, 
        height: 180, 
        borderRadius: 100, 
        alignSelf: 'center',
        marginVertical: 20
    },
    name: {
        fontSize: 30,
        alignSelf: 'center',
    },
    userContaienr: {
        padding: 15
    },
    purchaseContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: '#90909033'
    },
    itemsContainer: {
        marginTop: 10
    },
    completeButton: {
        alignSelf: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#9FF898',
        borderRadius: 4,
        marginVertical: 15
    }
})