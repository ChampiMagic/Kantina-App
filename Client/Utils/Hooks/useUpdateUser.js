//import other dependencies
import axios from 'axios';

//Redux Actions
import { updateUser } from '../../Redux/slices/userSlice.js'

//import constructor
import HeaderConstructor from '../Constructors/HeaderConstructor.js';


const useUpdateUser =  async (data, dispatch) => {


    const config = await HeaderConstructor()

    try {

        const metaData = await axios.put('/privateUser/update', {updateUser: data}, config)
        const response = metaData.data.response

        dispatch(updateUser(response.user))

        return { data: response.user , message: response.message,  error: null}

    } catch(err){
        
        return { data: {},  message: null,  error: err.message }
    }


}

export default useUpdateUser;