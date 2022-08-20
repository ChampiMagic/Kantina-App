import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, ScrollView } from "react-native";
import SimpleCustomTextInput from './SimpleCustomTextInput'
import DateTimePicker from '@react-native-community/datetimepicker';

//import icons
import { AntDesign } from '@expo/vector-icons';




const Profile = ({name}) => {
    
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState('hombre');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const changeGenre = (genre) => {
    setGenre(genre)
  }


  const showDatepicker = () => {
    if (Platform.OS === 'android') {
        setShow(true);
        // for iOS, add a button that closes the picker
      }
  };
  
  
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={{ width: 180, height: 180, borderRadius: 100 }} source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" }}/>
            </View>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Nombre</Text>
                    <SimpleCustomTextInput name='nombre' placeholder="Nombre" value={name} style={{ width: '50%' }}/>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.text}>Fecha de Nacimiento</Text>
                    </View>
                    <TouchableOpacity onPress={showDatepicker} style={{ borderBottomColor: '#222', borderBottomWidth: 1, width: '50%', paddingBottom: 10}}>
                        <Text style={{ fontSize: 17 }}>{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}</Text>
                    </TouchableOpacity>
                    
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        display="default"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        onChange={onChange}
                        />
                    )}
                </View>

                <View style={{ borderBottomColor: '#e2e2e2', borderBottomWidth: 1 }}>
                    <Text style={styles.text}>Genero</Text>
                    <ScrollView style={styles.genresContainer}  horizontal={true}>
                        <TouchableOpacity  style={styles.customSelector(genre === 'hombre')} onPress={() => changeGenre('hombre') } on>
                            <Text style={styles.text}>Hombre</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.customSelector(genre === 'mujer')} onPress={() => changeGenre('mujer')}>
                            <Text style={styles.text}>Mujer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.customSelector(genre === 'otro')} onPress={() => changeGenre('otro')}>
                            <Text style={styles.text}>Otro</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <TouchableOpacity onPress={() => console.log('submit')}>
                     <AntDesign name="checkcircle" size={60} color='#90EE90' style={{ alignSelf: 'center', marginTop: 50 }}/>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

export default Profile;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    imgContainer: {
        backgroundColor: 'f22'
    },
    form: {
        paddingTop: 10,
        width: '100%',
        justifyContent: 'center',
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    text: {
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