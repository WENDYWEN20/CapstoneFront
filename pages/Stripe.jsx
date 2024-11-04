import {CartContext} from "./CartContext.jsx";
import React, { useContext } from "react";


// const stripe = useStripe(); // Initialize Stripe
// const elements = useElements(); // Initialize Stripe Elements
export default function CheckoutButton() {

const { cart } = useContext(CartContext); 
const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    // Function to handle the checkout session
    //set destructure here from cart in the req.body
    const {name, _id,price}=cart
    const handleCheckout = async() => {

      fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,_id, price}
          // cart
          // items:[
          //   {id:1, quantity:3},
          //   {id:2, quantity:1}
          // ]
        ),
      })
        .then((res) => {
            console.log(res)
            console.log(res.body)
            console.log(cart)
          if (res.ok) return res.json();
          return res.json().then(json=>Promise.reject(json))
          
        })
        .then(({ url }) => {
          //  console.log(url)
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