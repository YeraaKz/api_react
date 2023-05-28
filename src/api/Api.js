import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/sneakers';

export const getAllSneakers = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching sneakers');
    }
};

export const getSneakerById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching sneaker by ID');
    }
};

export const updateSneaker = async (id, updatedSneaker) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedSneaker);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update sneaker');
    }
};


export const deleteSneaker = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting sneaker');
    }
};

export const addSneaker = async (sneaker) => {
    try {
        const response = await axios.post(API_BASE_URL, sneaker);
        return response.data;
    } catch (error) {
        throw new Error('Error adding sneaker');
    }
};
