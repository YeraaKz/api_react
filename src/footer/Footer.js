import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="footer-social-media">
                        <a href="#" className="footer-social-media-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="footer-social-media-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="footer-social-media-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">Contact</h4>
                    <p className="footer-contact-info">
                        Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </p>
                    <p className="footer-contact-info">
                        Email: <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                    <p className="footer-contact-info">
                        Address: 1234 Street, City, State, Country
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
