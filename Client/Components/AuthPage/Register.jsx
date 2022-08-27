import React, {useState} from "react";
import { Formik } from 'formik'
import FormikTextInput from "./FormikTextInput";
import { View, Button, StyleSheet, Text, Image} from "react-native";
import { registerValidationSchema } from '../../Utils/ValidationSchemas/Register'
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { useDispatch } from "react-redux";



//import components
import GenreSelector from "./GenreSelector";
import ErrorText from "./ErrorText";

//reducer
import { saveUser } from "../../Redux/slices/userSlice";

//Token Store
import * as SecureStore from 'expo-secure-store';

export default function Register() {

    const dispatch = useDispatch()

    const [isChecked, setChecked] = useState(false);


    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        genre: '',
        isStudent: false,
    }


    const onSubmit = (values) => {
        
    
        axios.post('publicAuth', values)
        .then(async (metaData) => {

            await SecureStore.setItemAsync("token", metaData.data.response.token);
           
            dispatch(saveUser(metaData.data.response.user))
          
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <Formik validationSchema={registerValidationSchema} initialValues={initialValues} onSubmit={(values) => onSubmit(values)}>
            {({ handleSubmit, setFieldValue, errors}) => {
                return (
                   
                    <View>
                        
                        <FormikTextInput 
                        name='email'
                        placeholder='E-mail'
                        />
                        <FormikTextInput 
                        name='name'
                        placeholder='Name'
                        />
                        <FormikTextInput 
                        name='password'
                        placeholder='Password'
                        secureTextEntry
                        />
                        <FormikTextInput 
                        name='passwordConfirmation'
                        placeholder='Confirm password'
                        secureTextEntry
                        />

                        <View style={styles.genreContainer(errors.genre)}>
                            <GenreSelector name='genre' setFieldValue={setFieldValue}/>
                            {errors.genre && <ErrorText>{errors.genre}</ErrorText>}
                        </View>
    
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.checkboxText} >Are you a student?</Text>
                            <Checkbox  value={isChecked} onValueChange={(value) => {
                                setFieldValue("isStudent", value, false)
                                setChecked(value)
                            }} />
                        </View>
                                
                        <Button onPress={handleSubmit} title='Sign Up'/>
                        
                    </View>
                )
            }}
        </Formik>
    )
}


const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 12
    },
    checkboxText: {
        fontSize: 17,
        marginRight: 20
    },
    genreContainer: (error) => ({
            borderColor: 'red',
            borderWidth: error? 0: 0,
            padding: 10

        })
})