//import components
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

//import hooks
import { useEffect, useState } from "react";

//env variable
import { BACKEND_URL } from "@env"


const Presentation = ({user}) => {

   const [purchases, setPurchases] = useState([])

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

        setPurchases(todayPurchases)
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.userContaienr}>
                <Image style={styles.image} source={{ uri: (BACKEND_URL || `http://192.168.0.103:3005/api/`)+`privateAWS/${user.imageKey}` }}/>
                <Text style={styles.name}>{user.name}</Text>
            </View>
    
                <FlatList
                 data={purchases}
                 renderItem={({item}) => (
                    <View key={item._id} style={styles.purchaseContainer}>
                        <Text style={{alignSelf: 'center'}}>Pedido ID: {item._id}</Text>
                        <View style={styles.itemsContainer}>
                            {
                                item.products?.map(productData => (
                                    <View key={productData._id} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                                        <Text >{productData.product.name}</Text>
                                        <Image style={{width: 100, height: 100}} source={{ uri: productData.product.image}}/>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                 )}
                />
          
           
        </View>
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
    }
})