import { View, StatusBar, StyleSheet} from "react-native";
import Profile from "../Components/profile";



const Settings = () => {


    return (
    
        <View style={styles.container}>
           <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
            <Profile />
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    }
})