import { View, Text, StatusBar, StyleSheet, ImageBackground } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 

//QR component
import QRCode from "react-qr-code";


const URI = {
    Login: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
}

const MyQRcode = ({ navigation }) => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
    
        <ImageBackground source={{ uri: URI.Login }} resizeMode="cover" style={styles.BackgroundImage}>
           <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
           <View style={styles.QRContainer}>
                <Text style={styles.text}>My QR Code</Text>
                <QRCode title="My QR Code" value="CJS6868JDN3mc5643fewf" size={256}/>
           </View>
        </ImageBackground>
    )
}

export default MyQRcode;

const styles = StyleSheet.create({
    BackgroundImage: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
   QRContainer: {
        justifyContent: 'center',
        alignItems: 'center'
   },
   text: {
     fontSize: 40,
     fontWeight: '600',
     marginBottom: 40
   }
})