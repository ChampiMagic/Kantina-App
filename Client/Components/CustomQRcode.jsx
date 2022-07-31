import React from "react";
import { View, StyleSheet } from "react-native";

//import Icons
import { AntDesign } from '@expo/vector-icons';

//import QR component
import QRCode from "react-qr-code";


const CustomQRcode = () => {

    return (
        <View style={styles.QRcontainer}>
            <AntDesign name="arrowdown" size={80} color="black" style={styles.arrow} />
             <QRCode title="My QR Code" value="CJS6868JDN3mc5643fewf" size={256} level='L' />
        </View>
    )

}

export default CustomQRcode;

const styles = StyleSheet.create({
    QRcontainer: {
        justifyContent: "center",
        alignItems: 'center'
    },
    arrow: {
        marginBottom: 30
    }
})