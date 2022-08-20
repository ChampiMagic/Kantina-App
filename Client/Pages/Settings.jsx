import { View, StatusBar, StyleSheet} from "react-native";
import Profile from "../Components/profile";

//Hooks
import { useSelector } from "react-redux";



const Settings = () => {

    const user = useSelector(state => state.userController.user)


    return (
    
        <View style={styles.container}>
           <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
            <Profile name={user.name}/>
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