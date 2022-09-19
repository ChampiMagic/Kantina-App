//import Constructors
import HeaderConstructor from "../Constructors/HeaderConstructor";

//import axios
import axios from "axios";


const useAddPurchase = async (purchaseData, paymentData, confirmPayment, billingDetails) => {

    const config = await HeaderConstructor()
    

    const metaData = await axios.post(`privateStripe`, paymentData, config)
    const { clientSecret, stripeError } = metaData.data;
    
    if (stripeError) {
        
        return { data: null,  message: null,  error: "Unable to process payment" }
    }
    else {

        const { paymentIntent, error } = await confirmPayment(clientSecret, {
            type: "Card",
            billingDetails: billingDetails,
          });
          
        if (error) {  
            return { data: null,  message: null,  error: error.message }

        } else if (paymentIntent) {

            try {
                const metaData = await axios.post('privatePurchase', purchaseData, config)
                const response = metaData.data

                return { data: null,  message: response.message,  error: null }
            } catch(err) {

                if(err.message = 'Network Error')  return { data: {},  message: null,  error: err.message }
    
                return { data: null,  message: null,  error: err.response.data.message }
            }
           
        }
    }

    
};

export default useAddPurchase;