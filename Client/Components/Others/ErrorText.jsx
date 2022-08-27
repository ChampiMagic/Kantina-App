import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ErrorText: {
        fontSize: 15,
        color: '#c91c1c',
        fontWeight: '500',
        marginBottom: 5
    }
})

export default function ErrorText({children, style, ...props}) {

    const CustomStyles = [
        styles.ErrorText,
        style
    ]

    return (
        <>
            <Text style={CustomStyles} {...props}>
                {children}
            </Text>
        </>
    )
}