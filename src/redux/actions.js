// actions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const CLOSE_CART = 'CLOSE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (sneaker) => {
    return {
        type: ADD_TO_CART,
        payload: sneaker,
    };
};

export const removeFromCart = (sneakerId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: sneakerId,
    };
};


