import React, {useContext, useState} from 'react';
import './SearchFilter.css';
import {LanguageContext} from "../languageProvider/LanguageContext";

const SearchFilter = ({ onSearch, onPriceFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const {translation} = useContext(LanguageContext);


    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handlePriceFilter = () => {
        onPriceFilter(minPrice, maxPrice);
    };

    return (
        <div className="search-filter">
            <div className="search-input-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder={translation.searchByName}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    {translation.search}
                </button>
            </div>
            <div className="price-filter-container">
                <input
                    className="price-input"
                    type="number"
                    placeholder={translation.minPrice}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="price-separator">-</span>
                <input
                    className="price-input"
                    type="number"
                    placeholder={translation.maxPrice}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button className="price-filter-button" onClick={handlePriceFilter}>
                    {translation.filter}
                </button>
            </div>
        </div>
    );
};

export default SearchFilter;
