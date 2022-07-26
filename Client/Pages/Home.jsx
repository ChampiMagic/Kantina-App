import React from "react";
import { View, Text, Button, StatusBar } from "react-native";


const Home = ({ navigation }) => {
    return (
        <View>
           <StatusBar
            animated={true}
            barStyle='light-content'
            />
                <Text style={{ color: 'red' }}>Home Page</Text>
                <Button 
                title="Login"
                onPress={() => navigation.navigate("Register")}
                />
        </View>
    )
}

export default Home;