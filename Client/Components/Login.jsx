import React from "react";
import { Formik } from 'formik'
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import { loginValidationSchema } from "../Utils/ValidationSchemas/Login";


export default function Login() {

    const initialValues = {
        email: '',
        password: ''
    }

    console.log(count)
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={(values) => console.log(values)}>
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