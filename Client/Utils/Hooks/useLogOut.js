//Token Store
import * as SecureStore from 'expo-secure-store';

//reducer
import { deleteUser } from '../../Redux/slices/userSlice';

import { Alert } from 'react-native';

const useLogOut = async (dispatch) => {

    try {

       await SecureStore.deleteItemAsync("token")
       
       dispatch(deleteUser())

    } catch (err) {

        Alert.alert("Error logOut", err.message)
    }
   
}

export default useLogOut;