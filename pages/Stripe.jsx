import {CartContext} from "./CartContext.jsx";
import React, { useContext } from "react";


// const stripe = useStripe(); // Initialize Stripe
// const elements = useElements(); // Initialize Stripe Elements
export default function CheckoutButton() {

const { cart } = useContext(CartContext); 
const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    // Function to handle the checkout session
    const handleCheckout = async(e) => {

      const res=await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      })
        .then((res) => {
            console.log(res)
            console.log(res.body)
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then(({ url }) => {
           console.log(url)
          window.location = url; // Redirect to the checkout URL
        })
        .catch((e) => {
          console.error(e.error);
        });


    };
  
    return (
      <button onClick={handleCheckout}>Stripe Checkout Link ${totalPrice}</button>
    );
  }