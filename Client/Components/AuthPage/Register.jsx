//import dependencies
import React, { useState } from "react";
import axios from 'axios';

//import Validation Schema
import { registerValidationSchema } from '../../Utils/ValidationSchemas/Register'

//import Hooks
import { useDispatch } from "react-redux";

//import components
import { Formik } from 'formik'
import { View, Button, StyleSheet, Text } from "react-native";
import GenreSelector from "../Others/GenreSelector";
import ErrorText from "../Others/ErrorText";
import Checkbox from 'expo-checkbox';
import FormikTextInput from "../Others/FormikTextInput";

//import action
import { saveUser } from "../../Redux/slices/userSlice";

//import Token Store
import * as SecureStore from 'expo-secure-store';

export default function Register() {

    const dispatch = useDispatch()

    const [error, setError] = useState(null)
    const [isChecked, setChecked] = useState(false);
    

    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        genre: '',
        isStudent: false,
    }


    const onSubmit = async (values) => {
        
        try {

            const metaData = await axios.post('publicAuth', values)
            const response = metaData.data.response

            await SecureStore.setItemAsync("token", response.token);
               
            dispatch(saveUser(response.user))

        } catch (err) {

            console.log(err)
            setError(err.response.data.message)
        }

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
                        { error && <ErrorText style={styles.error}>{error}</ErrorText> }
                        
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

        }),

    error: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 20
    }
})