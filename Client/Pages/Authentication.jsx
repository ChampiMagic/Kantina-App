import React from "react";
import { View, Text, StatusBar} from "react-native";

const Authentication = () => {
    return (
        <View>
            <StatusBar
            animated={true}
            barStyle='light-content'
            />
            <Text>Login Page</Text>
        </View>
    )
}

export default Authentication;