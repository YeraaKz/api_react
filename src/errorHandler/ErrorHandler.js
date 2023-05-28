import React from 'react';
import './ErrorHandler.css';

const ErrorHandler = ({ message }) => {
    return (
        <div className="error-container">
            <h2 className="error-title">Error</h2>
            <p className="error-message">{message}</p>
        </div>
    );
};

export default ErrorHandler;
