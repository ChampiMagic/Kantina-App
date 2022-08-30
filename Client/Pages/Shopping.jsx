//import components
import { View, StatusBar, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import ShoppingCard from "../Components/ShoppingPage/ShoppingCard";
import ErrorText from '../Components/Others/ErrorText'

//import Hooks
import { useCallback } from "react";
import { useState } from "react";
import useGetProducts from "../Utils/Hooks/useGetProducts";
import { useFocusEffect } from "@react-navigation/native";

//import Icons
import { AntDesign } from '@expo/vector-icons'; 


const Shopping =  () => {

    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])

    //input states
    const [group, setGroup] = useState("")
    const [toSearch, setToSearch] = useState("")

    //handlers states
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSearch = async (name) => {

        setToSearch(name)
        setGroup("")
        
        setLoading(true)

        const { data, message, allGroups, error } = await useGetProducts(null, null, name, false)

        setProducts(data)
        setError(error)

        setLoading(false)

  
       
        
    } 

    const changeSection = async (sectionId) => {
      setGroup(sectionId)

      setLoading(true)

      const {data, message, allGroups, error} = await useGetProducts(sectionId)

      setProducts(data) 

      setError(error)

      setLoading(false)     
    }

    useFocusEffect(
      useCallback(() => {
        const asyncCall = async () => {

          setLoading(true)

          const {data, message, allGroups, error} = await useGetProducts(null, null, null, true)
          setProducts(data)
          setFilters(allGroups)
          setError(error)

          setLoading(false)
        }
  
        asyncCall()
  
        return () => {
          setGroup("")
          setToSearch("")
          setError(null)
          setProducts([])
        }
      }, [])
    )

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
            {!loading && !error? 
               <FlatList 
               data={products}
               renderItem={({item}) => <ShoppingCard _id={item._id} image={item.image} title={item.name} price={item.price} />}
               numColumns={2}
               columnWrapperStyle={styles.container}
               />
              :
              null
            }

            {loading && <ActivityIndicator style={styles.loading} size={150} color="#00ff00" />}
            {error && <ErrorText style={styles.error}>{error}</ErrorText>}
            
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
    }),
    loading: {
      alignSelf: 'center',
      marginTop: 150
    },
    error: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: '400',
      marginTop: 20
  }
})