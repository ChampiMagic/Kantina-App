import { View, Text, StatusBar, StyleSheet, ImageBackground, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const URI = {
    Login: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
}

const Home = ({ navigation }) => {

    

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
                    <AntDesign name="shoppingcart" size={65} color="black" onPress={() => navigation.navigate("Shopping")}/>
                    <Text style={styles.text}>Comprar</Text>
                </View>

                <View style={styles.iconContainer}>
                    <AntDesign name="calendar" size={65} color="black" onPress={() => navigation.navigate("Chronogram")}/>
                    <Text style={styles.text}>Calendario</Text>
                </View>

                <View style={styles.iconContainer}>
                    <AntDesign name="qrcode" size={65} color="black" onPress={() => navigation.navigate("MyQRcode")}/>
                    <Text style={styles.text}>CODIGO QR</Text>
                </View>

                <View style={styles.iconContainer}>
                     <AntDesign name="setting" size={65} color="black" onPress={() => navigation.navigate("Settings")}/>
                     <Text style={styles.text}>Configuracion</Text>
                </View>
                    
            </View>
        </ImageBackground>
    )
}

export default Home;

const styles = StyleSheet.create({
    BackgroundImage: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 50
    },
    imageContainer: {
        flexGrow: 4,
    },
    subContainer: {
        flexGrow: 6,
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