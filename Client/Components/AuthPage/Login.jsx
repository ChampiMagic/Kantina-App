//import dependencies
import React, {useState} from "react";
import axios from 'axios';

//import Validation Schema
import { loginValidationSchema } from "../../Utils/ValidationSchemas/Login";


//import Components
import { Formik } from 'formik'
import { View, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { ErrorMessage } from "formik";

//import hooks
import { useDispatch } from "react-redux";

//import action
import { saveUser } from "../../Redux/slices/userSlice";

//import Token Store
import * as SecureStore from 'expo-secure-store';


export default function Login() {

    const [ error, setError ] = useState(null)

    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = async (values) => {
        
        try {

            const metaData = await axios.post('publicAuth/login', values)
            const response = metaData.data.response
        
            await SecureStore.setItemAsync("token", response.token);

            dispatch(saveUser(response.user))

        } catch (err) {

            setError(err.message)
        }
       
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
                        { error && <ErrorMessage>{error}</ErrorMessage> }

                    </View>
                )
            }}
        </Formik>
    )
}