import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

ReactDOM.render(
    <BrowserRouter>
        <ProductContextProvider>
            <CartContextProvider>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </CartContextProvider>
        </ProductContextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
