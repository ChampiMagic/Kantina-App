import React, { useState } from "react";
import { View, StatusBar, StyleSheet, ImageBackground} from "react-native";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ToggleSwitch from 'toggle-switch-react-native'

const URI = {
    Login: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
}

const Authentication = () => {

    

    const [ onToggle, setOnToggle ] = useState(false)
    const [ label , setLabel ] = useState('Login')

    const switchOnToggle = (isOn) => {
        setOnToggle(isOn)
        isOn? setLabel('Register') : setLabel('Login') 
    }

    return (
          <ImageBackground source={{ uri: URI.Login }} resizeMode="cover" style={styles.BackgroundImage}>
                <StatusBar
                    animated={true}
                    translucent={true}
                    backgroundColor='rgba(0, 0, 0, 0.07)'
                    barStyle='dark-content'
                    />
                    <View style={styles.SubContainer}>
                        <View style={styles.ButtonContainer}>
                            <ToggleSwitch
                                isOn={onToggle}
                                onColor="#4287f5"
                                offColor="#4287f5"
                                label={label}
                                labelStyle={{ color: "black", fontWeight: "900" }}
                                size="medium"
                                onToggle={isOn => switchOnToggle(isOn)}
                                style={{ alignSelf: 'flex-end', flexDirection: 'row' }}
                            />
                        </View>
                        <View style={styles.FormContainer}>
                            {onToggle? 
                            <Login />
                            :
                            <Register />
                            }
                        </View>
                    </View>
          </ImageBackground>
    )
}

const styles = StyleSheet.create({
    BackgroundImage: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubContainer: {
        width: '80%',
        padding: 25,
    },
    ButtonContainer: {
        marginBottom: 30,
    },
    FormContainer: {

    }
})


export default Authentication;