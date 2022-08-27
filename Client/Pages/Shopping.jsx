import { useCallback } from "react";
import { View, StatusBar, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import ShoppingCard from "../Components/ShoppingPage/ShoppingCard";
import { useState, useEffect } from "react";
import useGetProducts from "../Utils/Hooks/useGetProducts";
import { useFocusEffect } from "@react-navigation/native";

const Shopping =  () => {

    const [products, setProducts] = useState([])
    const [group, setGroup] = useState("")
    const [filters, setFilters] = useState([])
    const [toSearch, setToSearch] = useState("")

    const handleSearch = async (name) => {
        setToSearch(name)
        setGroup("")
        
        try {
          const { data, message } = await useGetProducts(null, null, name, false)
          setProducts(data)

        }catch (err) {
          setProducts(err.data)
        }
       
        
    } 

    const changeSection = async (sectionId) => {
      setGroup(sectionId)

      const {data, message} = await useProducts(sectionId)
      setProducts(data)      
    }

    useFocusEffect(
      useCallback(() => {
        const asyncCall = async () => {
          const {data, message, allGroups} = await useProducts(null, null, null, true)
          setProducts(data)
          setFilters(allGroups)
        }
  
        asyncCall()
  
        return () => {
          setGroup("")
          setToSearch("")
        }
      }, [])
    )

    /*useEffect(() => {
      const asyncCall = async () => {
        const {data, message, allGroups} = await useProducts(null, null, null, true)
        setProducts(data)
        setFilters(allGroups)
      }

      asyncCall()
    }, [])*/

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
                 <TextInput style={styles.input} placeholder='Search' value={toSearch} onChangeText={(value) => handleSearch(value)}/>
                </View>
                    <ScrollView style={styles.genresContainer}  horizontal={true}>
                    <TouchableOpacity  style={styles.customSelector(group === "")} onPress={() => changeSection("") }>
                        <Text style={styles.text}>Todos</Text>
                    </TouchableOpacity>
                      {filters?.map((g) => (
                        <TouchableOpacity key={g} style={styles.customSelector(group === g)} onPress={() => changeSection(g) }>
                          <Text style={styles.text}>{g}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
            </View>
            
            <FlatList 
            data={products}
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