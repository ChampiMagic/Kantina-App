import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    TextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    Error: {
        borderColor: '#c91c1c'
    }
})


export default function CustomTextInput({style, error, ...props}) {
    const CustomStyles = [
        styles.TextInput,
        style,
        error && styles.Error
    ]


    return <TextInput style={CustomStyles} {...props} />
}