import React, {useState} from "react";
import { Formik } from 'formik'
import FormikTextInput from "./FormikTextInput";
import { View, Button, StyleSheet, Text } from "react-native";
import { registerValidationSchema } from '../Utils/ValidationSchemas/Register'
import axios from 'axios';
import Checkbox from 'expo-checkbox';

export default function Register() {

    const [isChecked, setChecked] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isStudent: false,
    }


    const onSubmit = (values) => {

        axios.post('publicAuth', values)
        .then(metaData => {
            console.log(metaData.data.response)
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <Formik validationSchema={registerValidationSchema} initialValues={initialValues} onSubmit={(values) => onSubmit(values)}>
            {({ handleSubmit, setFieldValue }) => {
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
                        <View>
                            <Text>Are you a student?</Text>
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

