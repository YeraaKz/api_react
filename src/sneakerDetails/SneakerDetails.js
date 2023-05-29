import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSneakerById } from '../api/Api';
import './SneakerDetails.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/actions";


const SneakerDetails = () => {
    const { id } = useParams();
    const [sneaker, setSneaker] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        fetchSneaker();
    }, []);

    const fetchSneaker = async () => {
        try {
            const response = await getSneakerById(id);
            setSneaker(response);
        } catch (error) {
            console.error('Error fetching sneaker:', error);
        }
    };

    const handleAddToCart = () => {
        dispatch(addToCart(sneaker));
    };

    const isSneakerInCart = cart.some((item) => item.id === sneaker.id);

    if (!sneaker) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="sneaker-details-header">Sneaker Details</h2>
            <div className="sneaker-details-container">
                <div className="sneaker-details-image">
                    <img src={sneaker.image} alt={sneaker.name} />
                </div>
                <div className="sneaker-info">
                    <p>{sneaker.name}</p>
                    <p>{sneaker.brand}</p>
                    <p>{sneaker.price}</p>
                    <button
                        className={`add-to-cart-btn ${isSneakerInCart ? 'added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isSneakerInCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SneakerDetails;
