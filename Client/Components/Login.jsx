import React from "react";
import { Formik } from 'formik'
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import { loginValidationSchema } from "../Utils/ValidationSchemas/Login";
import axios from 'axios';

//Token Store
import * as SecureStore from 'expo-secure-store';

export default function Login() {

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values) => {
       
        axios.post('publicAuth/login', values)
        .then(async (metaData) => {
            await SecureStore.setItemAsync("token", metaData.data.response);
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={(values) => onSubmit(values)}>
            {({ handleSubmit }) => {
                return (
                    <View>
                        <FormikTextInput 
                        name='email'
                        placeholder='E-mail'
                        />
                        <FormikTextInput 
                        name='password'
                        placeholder='Password'
                        secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='Sign In' />
                    </View>
                )
            }}
        </Formik>
    )
}