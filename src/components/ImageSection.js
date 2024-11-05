import React from 'react';
import './App.css'; // Import the CSS for styling

const ImageSection = () => {
    return (
        <div className="image-section">
            <img
                src={`${process.env.PUBLIC_URL}/images/image.jpg`}
                alt="Market scene"
                className="signup-image"
            />
        </div>
    );
};

export default ImageSection;
