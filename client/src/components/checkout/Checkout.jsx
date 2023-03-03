import React, {useContext} from 'react';
import { CartContext} from "../../context/CartContext";
import Layout from "../shared/Layout";
import StripeCheckout from "./stripe-checkout/StripeCheckout";
import './checkout.styles.scss';

function Checkout() {
    const { itemCount, total } = useContext(CartContext);
    return (
        <Layout>
            <div className="checkout">
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                <h3>{`Amount to pay: $${total}`}</h3>
                <StripeCheckout />
            </div>
        </Layout>
    );
}

export default Checkout;