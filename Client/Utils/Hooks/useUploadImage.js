//import dependencies
import axios from 'axios'

//import constructor
import HeaderConstructor from '../Constructors/HeaderConstructor.js';


const useUploadImage = async (data) => {

    let body = new FormData()
    body.append('image', data)
    
   const config = await HeaderConstructor({'Content-Type': 'multipart/form-data'})

   try {

        const metaData = await axios.put('/privateAWS', body, config)

        const response = metaData.data.response

        return { data: response.imageKey , message: response.message, error: null}

   } catch (err) {

      return { data: null, message: null , error:  err.message}
   }

}


export default useUploadImage;