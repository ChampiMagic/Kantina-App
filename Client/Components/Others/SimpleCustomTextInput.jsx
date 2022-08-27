import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    TextInput: {
        borderBottomColor: '#222',
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        fontSize: 16
    },
    Error: {
        borderBottomColor: '#c91c1c'
    }
})


export default function SimpleCustomTextInput({style, error, ...props}) {
    const CustomStyles = [
        styles.TextInput,
        style,
        error && styles.Error
    ]


    return <TextInput style={CustomStyles} {...props} />
}