import Stripe from "stripe";

import 'dotenv/config'

//Confirm the API version from your stripe dashboard
const stripe = Stripe(process.env.SECRET_KEY, { apiVersion: "2022-08-01" });

export const stripePayment = async (req, res, next) => {

    const { amount, currency } = req.body;
    
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount, //lowest denomination of particular currency
        currency,
        payment_method_types: ["card"], //by default
      });
  
      const clientSecret = paymentIntent.client_secret;
  
      res.json({
        clientSecret: clientSecret,
      });
    } catch (e) {
      
      console.log("ERROR: STRIPECONTROLLER(stripePayment)");
      res.json({ stripeError: e.message });
    }
  }