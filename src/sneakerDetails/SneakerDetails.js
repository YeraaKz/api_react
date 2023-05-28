import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSneakerById } from '../api/Api';
import './SneakerDetails.css'

const SneakerDetails = () => {
    const { id } = useParams();
    const [sneaker, setSneaker] = useState(null);

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
                    {/* Render additional sneaker details */}
                </div>
            </div>
        </div>
    );
};

export default SneakerDetails;
