import { useCallback } from "react";
import { View, StatusBar, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import ShoppingCard from "../Components/ShoppingCard";
import { useState, useEffect } from "react";
import useProducts from "../Utils/Hooks/useProducts";
import { useFocusEffect } from "@react-navigation/native";

const Shopping =  () => {

    

    const [data, setData] = useState([])
    const [group, setGroup] = useState("")

  

    const handleSearch = (name) => {
        
        const findedData = shoppinData.filter(data => data.name.includes(name))
        setData(findedData)
    } 

    const changeSection = (sectionId) => {
      setGroup(sectionId)
    }

    useFocusEffect(
      useCallback(() => {
        
  
        return () => {
          setGroup("")
        }
      }, [])
    )

    useEffect(() => {
      const asyncCall = async () => {
        const shoppingData = await useProducts(group)
        setData(shoppingData)
      }

      asyncCall()
    }, [group])

    return (
        <View style={{ flex: 1, paddingVertical: 10, backgroundColor: '#fff' }}>
             <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
            <View style={styles.inputsContainer}>
                <View style={styles.searchBar}>
                 <AntDesign name="search1" size={24} color="#d0d0d0" />
                 <TextInput style={styles.input} placeholder='Search' onChangeText={(value) => handleSearch(value)}/>
                </View>
                    <ScrollView style={styles.genresContainer}  horizontal={true}>
                    <TouchableOpacity  style={styles.customSelector(group === "")} onPress={() => changeSection("") }>
                        <Text style={styles.text}>Todos</Text>
                    </TouchableOpacity>
                      {data?.map((product) => (
                        <TouchableOpacity key={product._id} style={styles.customSelector(group === product.group)} onPress={() => changeSection(product.group) }>
                          <Text style={styles.text}>{product.group}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
            </View>
            
            <FlatList 
            data={data}
            renderItem={({item}) => <ShoppingCard _id={item._id} image={item.image} title={item.name} price={item.price} />}
            numColumns={2}
            columnWrapperStyle={styles.container}
            />
        </View>    
    )
}

export default Shopping;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputsContainer: {
        margin: 15
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#d0d0d0',
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 5
    },
    input: {
        marginLeft: 5,
        fontSize: 20
    },
    genresContainer: {
        padding: 10,
    },
    customSelector: (onPress) => ({
        borderColor: "#3b5998",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        marginHorizontal: 10, 
        backgroundColor: onPress? '#90EE90' :  '#fff',
    })
})