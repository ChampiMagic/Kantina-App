//Token Store
import * as SecureStore from 'expo-secure-store';

import { Alert } from 'react-native';

const useLogOut = async () => {

    try {

       await SecureStore.deleteItemAsync("token")
       console.log("log Out correctly")
    } catch (err) {

        Alert.alert("Error logOut", err.message)
    }
   
}

export default useLogOut;