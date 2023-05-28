import React, {useContext, useState} from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Cart from "../cart/Cart";
import {LanguageContext} from "../languageProvider/LanguageContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const { language, toggleLanguage } = useContext(LanguageContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const handleCloseCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const cartCount = useSelector((state) => state.cart.length);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="https://t3.ftcdn.net/jpg/01/36/55/48/360_F_136554899_bI9RjRJeAdCUoAgyIcNdMz8UvorxxohP.jpg" alt="Sneaker Shop" />
                    <Link to="/sneakers" className="navbar-logo-link">
                        <span className="navbar-logo-text">Sneaker Shop</span>
                    </Link>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/sneakers" className="navbar-link">Home</Link>
                    <a href="#" className="navbar-link">Men</a>
                    <a href="#" className="navbar-link">Women</a>
                    <a href="#" className="navbar-link">Sale</a>
                    <a href="#" className="navbar-link">Contact</a>
                </div>
                <div className="language-toggle">
                    <button onClick={toggleLanguage}>
                        {language === 'en' ? 'Switch to Russian' : 'Switch to English'}
                    </button>
                </div>
                <div className="navbar-cart">
                    <button className="cart-toggle-button" onClick={toggleCart}>
                        Open Cart ({cartCount})
                    </button>
                </div>
                <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`}>
                    <Cart onCloseCart={handleCloseCart} />
                </div>
                <div className="navbar-mobile-toggle" onClick={toggleNavbar}>
                    <span className={`navbar-toggle-icon ${isOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
