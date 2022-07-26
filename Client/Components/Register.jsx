import React from "react";
import { Formik } from 'formik'
import FormikTextInput from "./FormikTextInput";
import { View, Button } from "react-native";
import { registerValidationSchema } from '../Utils/ValidationSchemas/Register'

export default function Register() {

    const initialValues = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    return (
        <Formik validationSchema={registerValidationSchema} initialValues={initialValues} onSubmit={(values) => console.log(values)}>
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
                        <FormikTextInput 
                        name='passwordConfirmation'
                        placeholder='Confirm password'
                        secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='Sign Up' />
                    </View>
                )
            }}
        </Formik>
    )
}