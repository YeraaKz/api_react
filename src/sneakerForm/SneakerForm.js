import React, { useState } from 'react';
import { addSneaker } from '../api/Api';
import './SneakerForm.css'

const SneakerForm = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSneaker = {
            name,
            brand,
            image,
            price
        };

        try {
            const response = await addSneaker(newSneaker);
            console.log('New sneaker added:', response);
            // Clear form inputs
            setName('');
            setBrand('');
            setImage('');
            setPrice('');

        } catch (error) {
            console.error('Error adding sneaker:', error);
        }
    };

    return (
        <div className="sneaker-form-container">
            <h2 className="sneaker-form-title">Add Sneaker</h2>
            <form className="sneaker-form" onSubmit={handleSubmit}>
                <input
                    className="form-group"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="form-group"
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    className="form-group"
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    className="form-group"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button className="submit-button" type="submit">Add Sneaker</button>
            </form>
        </div>
    );
};

export default SneakerForm;
