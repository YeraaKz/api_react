import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSneakerById, updateSneaker } from '../api/Api';
import './EditForm.css'

const EditForm = () => {
    const { id } = useParams();
    const [sneaker, setSneaker] = useState(null);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');

    useEffect(() => {
        fetchSneaker();
    }, []);

    const fetchSneaker = async () => {
        try {
            const response = await getSneakerById(id);
            setSneaker(response);
            setName(response.name);
            setBrand(response.brand);
            setPrice(response.price);
            setImage(response.image);
        } catch (error) {
            console.error('Error fetching sneaker:', error);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedSneaker = {
                ...sneaker,
                name,
                brand,
                price,
                image,
            };
            await updateSneaker(id, updatedSneaker);
            // Handle successful update, e.g., show success message, navigate back to sneaker details page
        } catch (error) {
            console.error('Error updating sneaker:', error);
        }
    };


    return (
        <div>
            <h2 className="edit-header">Edit Sneaker</h2>
            <form className='edit-container' onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </label>
                </div>
                <button className={"edit-btn"} type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditForm;
