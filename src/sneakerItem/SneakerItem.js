import React, {useContext} from 'react';
import { deleteSneaker} from "../api/Api";
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from '../redux/actions';
import {Link} from "react-router-dom"; // Import the addToCart action
import './SneakerItem.css'
import {LanguageContext} from "../languageProvider/LanguageContext";

const SneakerItem = ({ sneaker, onDelete }) => {
    const {translation} = useContext(LanguageContext);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const handleDelete = async () => {
        try {
            await deleteSneaker(sneaker.id);
            onDelete(sneaker.id);
        } catch (error) {
            console.log('Error deleting sneaker: ', error)
        }
    }
    const handleAddToCart = () => {
        dispatch(addToCart(sneaker));
    };

    const isSneakerInCart = cart.some((item) => item.id === sneaker.id);

    if (sneaker.image === '') {
        throw new Error('Sneaker without Image');
    }

    return (
        <div className="sneaker-card">
            <button className="delete-button close" onClick={handleDelete}>
                <span aria-hidden="true">&times;</span>
            </button>
            <Link to={`/sneakers/${sneaker.id}`} className="sneaker-card-link">
                <div className="sneaker-image">
                    <img src={sneaker.image} alt={sneaker.name} />
                </div>
                <div className="sneaker-details">
                    <h3>{sneaker.name}</h3>
                    <p>{translation.brand}: {sneaker.brand}</p>
                    <p>{translation.price}: ${sneaker.price}</p>
                </div>
            </Link>
            <button
                className={`add-to-cart-button ${isSneakerInCart ? 'added' : ''}`}
                onClick={handleAddToCart}
                disabled={isSneakerInCart}
            >
                {isSneakerInCart ? translation.addedToCart : translation.addToCart}
            </button>
            <Link to={`/sneakers/${sneaker.id}/edit`} className="edit-button">
                {translation.edit}
            </Link>
        </div>
    );
};

export default SneakerItem;
