import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity} from "react-native";
import mime from "mime";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


//import icons 
import { AntDesign } from '@expo/vector-icons';

//import components
import SimpleCustomTextInput from '../Others/SimpleCustomTextInput'
import DatePicker from "../Others/DatePicker";
import GenreSelector from "../Others/GenreSelector";
import * as ImagePicker from 'expo-image-picker';


// validation schema
import { profileValidationSchema } from '../../Utils/ValidationSchemas/Profile.js'

// Hooks
import useUser from "../../Utils/Hooks/useUpdateUser";
import { useDispatch } from "react-redux";




const Profile = ({name, genre, date, imageKey, user}) => {

    const dispatch = useDispatch()

    const [ input, setInput ] = useState({})
    const [ error, setError ] = useState({})
    
    const handleChange = (value, field) => {
        
        setInput({
            ...input,
            [field]: value
        })
    }

    const handleSubmit = () => {

        profileValidationSchema.validate(input)
        .then( () => {

            useUser({
                ...user,
                ...input
            }, dispatch).then( () => {

                console.log("GOOD")
                

            }).catch(err => {
                console.log(err)
            })

       

        }).catch(err => {
            console.log(err)
        })
        
    }
 
    useEffect(() => {
        if(name) {
            setInput({
                ...input,
                name
            })
        }
    }, [name])

    const pickImage = async () => {

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        
    
        if (!result.cancelled) {
            
            const imgData = {
            uri : result.uri,
            type: mime.getType(result.uri),
            name: result.filename || result.uri.substring(result.uri.lastIndexOf('/') + 1)
            }

            const body = new FormData()
            body.append('image', imgData)

            try {


                const metaData = await axios.put('/privateUser/upload/image', body, {
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'multipart/form-data',
                        'authorization': `Bearer ${await SecureStore.getItemAsync('token')}`
                       }
                })

                setInput({
                    ...input,
                    imageKey: metaData.data.response.imageKey
                })
        
            }catch (err) {
                console.error(err)
            }
          
          
        }

      
      };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imgContainer} onPress={pickImage}>
                <Image style={{ width: 180, height: 180, borderRadius: 100 }} source={{ uri: `http://192.168.0.103:3005/api/privateUser/profileImg/${ input.imageKey? input.imageKey : imageKey}` }}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Nombre</Text>
                    <SimpleCustomTextInput name='nombre' placeholder="Nombre" value={input?.name} style={{ width: '50%' }} onChangeText={(text) => handleChange(text, "name")} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.text}>Fecha de Nacimiento</Text>
                    </View>

                    <DatePicker />
                  
                </View>

                <GenreSelector defaultGenre={genre}/>

                <TouchableOpacity onPress={handleSubmit}>
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
        marginVertical: 20,
        justifyContent: 'space-between',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
    }
})