//import Token Store
import * as SecureStore from 'expo-secure-store';

const HeaderConstructor = async (extra) => {
    
    const config = {
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "authorization": `Bearer ${await SecureStore.getItemAsync('token')}`,
            ...extra,
        }
    }
    
    console.log(config)
    return config;
}

export default HeaderConstructor;