import React, {useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from "../cartItem/CartItem";
import './Cart.css'
import {LanguageContext} from "../languageProvider/LanguageContext";

const Cart = ({onCloseCart}) => {
    const cart = useSelector((state) => state.cart);
    const isCartOpen = useSelector((state) => state.isCartOpen);
    const dispatch = useDispatch();
    const {translation} = useContext(LanguageContext);


    const handleCloseCart = () => {
        onCloseCart();
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={`cart ${isCartOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Cart</h2>
            </div>
            <ul>
                {cart.map((sneaker) => (
                    <CartItem key={sneaker.id} sneaker={sneaker} />
                ))}
            </ul>
            <div className="cart-total">{translation.total}: ${total}</div>
            <button className="cart-close-button" onClick={handleCloseCart}>
                {translation.close}
            </button>
        </div>
    );
};

export default Cart;
