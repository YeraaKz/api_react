import React, {useContext} from 'react';
import './BrandFilter.css'
import {LanguageContext} from "../languageProvider/LanguageContext";

const BrandFilter = ({ brands, selectedBrand, onBrandSelect }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <div className="brand-filter">
            <button
                className={`brand-filter-button ${selectedBrand === '' ? 'selected' : ''}`}
                onClick={() => onBrandSelect('')}
            >
                {translation.showAll}
            </button>
            {brands.map((brand) => (
                <button
                    key={brand}
                    className={`brand-filter-button ${selectedBrand === brand ? 'selected' : ''}`}
                    onClick={() => onBrandSelect(brand)}
                >
                    {brand}
                </button>
            ))}
        </div>
    );
};

export default BrandFilter;
