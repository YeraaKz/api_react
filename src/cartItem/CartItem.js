import React, {useContext} from 'react';
import './CartItem.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {LanguageContext} from "../languageProvider/LanguageContext";


const CartItem = ({ sneaker }) => {
    const dispatch = useDispatch();


    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(sneaker.id));
    };

    return (
        <li className="cart-item">
            <div className="cart-item-image">
                <img src={sneaker.image} alt={sneaker.name} />
            </div>
            <div className="cart-item-info">
                <h3>{sneaker.name}</h3>
                <p>{sneaker.price} $</p>
            </div>
            <button className="remove-from-cart-button" onClick={handleRemoveFromCart}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
};

export default CartItem;
