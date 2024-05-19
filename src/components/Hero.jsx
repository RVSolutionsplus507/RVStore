import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-5/12">
                <img src="https://www.pngall.com/wp-content/uploads/8/Service-Gear-PNG-Free-Download.png" alt="Hero Image" className="w-10/12" />
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to our Store!</h1>
                <p className="text-lg text-gray-600 mb-4">
                    We offer a wide range of products to meet all your needs.
                </p>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;