//import dependencies
import axios from 'axios'

//import constructor
import HeaderConstructor from '../Constructors/HeaderConstructor.js';

const useDeletePurchase = async (purchaseId) => {

    const config = await HeaderConstructor()
   
    try {

        const metaData = await axios.delete(`/privatePurchase/?purchaseId=${purchaseId}`, config)
        const response = metaData.data
        
        return { data: null , message: response.message,  error: null}

    } catch(err){
       
        if(err.message = 'Network Error')  return { data: {},  message: null,  error: err.message }
    
        return { data: null,  message: null,  error: err.response.data.message }
    }

}

export default useDeletePurchase;