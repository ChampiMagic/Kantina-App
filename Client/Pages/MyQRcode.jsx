import { View, Text, StatusBar, StyleSheet, ImageBackground } from "react-native";
import CustomQRcode from "../Components/CustomQRcode";

const URI = "https://images.unsplash.com/photo-1506143925201-0252c51780b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"


const MyQRcode = ({ navigation }) => {


    return (
    
        <ImageBackground source={{ uri: URI }} resizeMode="cover" style={styles.BackgroundImage}>
           <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
           <View style={styles.QRContainer}>
                <Text style={styles.text}>Scan Me!</Text>
               <CustomQRcode />
               <Text style={styles.subText}>Homero Gazze</Text>
           </View>
        </ImageBackground>
    )
}

export default MyQRcode;

const styles = StyleSheet.create({
    BackgroundImage: {
        flex:1,
        alignItems: 'center',
        paddingTop: 40,
    },
   QRContainer: {
        justifyContent: 'center',
        alignItems: 'center'
   },
   text: {
     fontSize: 45,
     fontWeight: '800',
     marginBottom: 20,
   },
   subText: {
    fontSize: 50,
     fontWeight: '300',
     marginTop: 20,
   }
})