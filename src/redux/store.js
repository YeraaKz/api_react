// store.js

import { createStore } from 'redux';
import {ADD_TO_CART, REMOVE_FROM_CART} from './actions';

const initialState = {
    cart: [],
    isCartOpen: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((sneaker) => sneaker.id !== action.payload),
            };
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
