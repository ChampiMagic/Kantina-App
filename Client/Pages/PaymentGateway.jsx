//import other dependencies
import React, { useState } from "react";
import axios from "axios";

//import components
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment, useStripe } from "@stripe/stripe-react-native";
import ErrorText from '../Components/Others/ErrorText.jsx'

//import Hooks
import useAddPurchase from "../Utils/Hooks/useAddPurchase";



const PaymentGateway = ({route}) => {

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  

    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const [error, setError] = useState(null)

    const { confirmPayment, loading } = useConfirmPayment();
    

    
    
      const handlePayPress = async () => {
        

        if (!cardDetails?.complete || !email) {
          Alert.alert("Please enter Complete card details and Email");
          return;
        }

        const billingDetails = {
          email: email,
        };
  
        const {purchaseData} = route.params
        
        const {message, error} = await useAddPurchase(purchaseData, {currency: 'usd', amount: purchaseData.amount}, confirmPayment, billingDetails)
        
        setError(error)
        if(message){
          Alert.alert(message)
        }
      };

    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                placeholder="E-mail"
                keyboardType="email-address"
                onChange={value => setEmail(value.nativeEvent.text)}
                style={styles.input}
            />
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                number: "4242 4242 4242 4242",
                }}
                cardStyle={styles.card}
                style={styles.cardContainer}
                onCardChange={cardDetails => {
                setCardDetails(cardDetails);
                }}
            />
            <Button onPress={handlePayPress} title="Pay" disabled={loading} />
            {error && <ErrorText>{error}</ErrorText>}
           
        </View>
    )
}

export default PaymentGateway;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      margin: 20,
    },
    input: {
      backgroundColor: "#efefefef",
  
      borderRadius: 8,
      fontSize: 20,
      height: 50,
      padding: 10,
    },
    card: {
      backgroundColor: "#efefefef",
    },
    cardContainer: {
      height: 50,
      marginVertical: 30,
    },
  });