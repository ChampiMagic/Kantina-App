import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity} from "react-native";
import mime from "mime";


//import icons 
import { AntDesign } from '@expo/vector-icons';

//import components
import SimpleCustomTextInput from '../Others/SimpleCustomTextInput'
import DatePicker from "../Others/DatePicker";
import GenreSelector from "../Others/GenreSelector";
import * as ImagePicker from 'expo-image-picker';
import ErrorText from '../Others/ErrorText'


// validation schema
import { profileValidationSchema } from '../../Utils/ValidationSchemas/Profile.js'

// Hooks
import useUpdateUser from "../../Utils/Hooks/useUpdateUser.js";
import { useDispatch } from "react-redux";
import useUploadImage from '../../Utils/Hooks/useUploadImage.js'

//env variable
import { BACKEND_URL } from "@env"



const Profile = ({name, genre, date, imageKey, user}) => {

    const dispatch = useDispatch()

    const [ input, setInput ] = useState({})
    const [ error, setError ] = useState(null)
    
    const handleChange = (field, value) => {
        
        setInput({
            ...input,
            [field]: value
        })
    }

    const handleSubmit = () => {

        profileValidationSchema.validate(input)
        .then( async () => {

           const { error } = await useUpdateUser({...user, ...input}, dispatch)

            setError(error)

        }).catch(err => {
            
            setError(err.message)
           
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
          aspect: [5, 4],
          quality: 1,
        });
        
    
        if (!result.cancelled) {
            
            const imgData = {
            uri : result.uri,
            type: mime.getType(result.uri),
            name: result.filename || result.uri.substring(result.uri.lastIndexOf('/') + 1)
            }
        

            const {data, error ,message} = await useUploadImage(imgData)
            
            setError(error)
            setInput({
                ...input,
                imageKey: data
            })
          
        }

      
      };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imgContainer} onPress={pickImage}>
                <Image style={{ width: 180, height: 180, borderRadius: 100 }} source={{ uri: (BACKEND_URL || `http://192.168.0.103:3005/api/`)+`privateAWS/${ input.imageKey? input.imageKey : imageKey}` }}/>
            </TouchableOpacity>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Nombre</Text>
                    <SimpleCustomTextInput name='nombre' placeholder="Nombre" value={input?.name} style={{ width: '50%' }} onChangeText={(text) => handleChange("name", text)} />
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.text}>Fecha de Nacimiento</Text>
                    </View>

                    <DatePicker defaultDate={date} setFieldValue={handleChange} />
                  
                </View>

                <GenreSelector defaultGenre={genre} setFieldValue={handleChange}/>

                {error && <ErrorText style={styles.error}>{error}</ErrorText>}

                <TouchableOpacity onPress={handleSubmit}>
                     <AntDesign name="checkcircle" size={60} color='#90EE90' style={{ alignSelf: 'center', marginTop: 30 }}/>
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
    },
    error: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 7
    }
})