//import dependencies
import axios from 'axios'

//import constructor
import HeaderConstructor from '../Constructors/HeaderConstructor.js';

const useGetUser = async (id) => {

    const config = await HeaderConstructor()
   
    try {

        const metaData = await axios.get(`/privateUser/?userId=${id}`, config)
        const response = metaData.data.response

        return { data: response.user , message: response.message,  error: null}

    } catch(err){
       
        if(err.message = 'Network Error')  return { data: {},  message: null,  error: err.message }
    
        return { data: null,  message: null,  error: err.response.data.message }
    }

}

export default useGetUser;