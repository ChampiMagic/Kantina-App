import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";


const GenreSelector = ({setFieldValue, defaultGenre}) => {

    const [genre, setGenre] = useState(null)


    const changeGenre = (genre) => {
        setGenre(genre)

        setFieldValue('genre', genre)
      }

    useEffect(() => {
        if(defaultGenre){
            setGenre(defaultGenre)
        }
    }, [])

    return (
        <View style={{ borderBottomColor: '#e2e2e2', borderBottomWidth: 1 }}>
            <Text style={styles.title}>Genero</Text>

            <ScrollView style={styles.genresContainer}  horizontal={true} >
                <TouchableOpacity  style={styles.customSelector(genre === 'male')} onPress={() => changeGenre('male') } on>
                    <Text style={styles.text}>Hombre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.customSelector(genre === 'female')} onPress={() => changeGenre('female')}>
                    <Text style={styles.text}>Mujer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.customSelector(genre === 'other')} onPress={() => changeGenre('other')}>
                    <Text style={styles.text}>Otro</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>    
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '400',
    },
    genresContainer: {
        padding: 10,
    },
    customSelector: (genre) => ({
        borderColor: "#3b5998",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        marginHorizontal: 10, 
        backgroundColor: genre? '#90EE90' :  '#fff',
    })
})

export default GenreSelector;