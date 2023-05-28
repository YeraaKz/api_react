// LanguageContext.js
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
    en: {
        price: 'Price',
        brand: 'Brand',
        addToCart: 'Add to Cart',
        addedToCart: 'Added to Cart',
        edit: 'Edit',
        addSneaker: 'Add Sneaker',
        showAll: 'Show All',
        search: 'Search',
        searchByName: 'Search by name',
        minPrice: 'Min Price',
        maxPrice: 'Max Price',
        filter: 'Filter',
        total: 'Total',
        close: 'Close',
    },
    ru: {
        price: 'Цена',
        brand: 'Бренд',
        addToCart: 'Добавить в корзину',
        addedToCart: 'Добавлено в корзину',
        edit: 'Редактировать',
        addSneaker: 'Добавить кроссовок',
        showAll: 'Показать все',
        search: 'Искать',
        searchByName: 'Искать по названию',
        minPrice: 'Мин Цена',
        maxPrice: 'Макс Цена',
        filter: 'Фильтр',
        total: 'Общая Цена',
        close: 'Закрыть',
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language is 'en'

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'));
    };

    const contextValue = {
        language,
        translation: translations[language],
        toggleLanguage,
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};
