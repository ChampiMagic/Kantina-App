import { View, Text, StatusBar, StyleSheet, ImageBackground, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 


const URI = {
    Login: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
}

const Settings = ({ navigation }) => {

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
            <View style={styles.imageContainer}>
                <Image style={{ width: 300, height: 300 }} source={require("../assets/kantinaLogo.png")}/>
            </View>
            <View style={styles.subContainer}>

                <View style={styles.iconContainer}>
                     <AntDesign name="setting" size={75} color="black" />
                     <Text style={styles.text}>Configuracion</Text>
                </View>
                    
            </View>
        </ImageBackground>
    )
}

export default Settings;

const styles = StyleSheet.create({
    BackgroundImage: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    imageContainer: {
        flexGrow: 4,
        paddingTop: 50
    },
    subContainer: {
        flexGrow: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
    },
    iconContainer: {
        alignItems: 'center',
        width: '50%',
        marginBottom: 80,
    },
    text: {
        fontSize: 20,
        fontWeight: '600'
    }
})