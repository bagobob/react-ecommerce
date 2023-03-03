import React, { useContext } from 'react';
import {CartContext} from "../../context/CartContext";
import Layout from "../../components/shared/Layout";
import CartItem from "./CartItem";
import './cart-page.styles.scss';
import Total from "./Total";

function CartPage() {
    const { cartItems, itemCount, total, increase, decrease, remove, clearCart  } = useContext(CartContext);
    const functions = { increase, decrease, remove, clearCart}
    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0
                        ? <div className="empty-card">Your cart is empty</div>
                        :
                        <>
                            <div className="cart-page">
                                <div className="cart-item-container">
                                    {
                                        cartItems.map(item => <CartItem { ...item } key={item.id}  { ...functions } />)
                                    }
                                </div>
                                <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                            </div>
                        </>
                }
            </>
        </Layout>
    );
}

export default CartPage;