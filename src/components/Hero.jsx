import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <div className="flex items-center justify-center z-10">
                
                <div className="w-5/12">
                    <img
                        src="https://www.pngall.com/wp-content/uploads/8/Service-Gear-PNG-Free-Download.png"
                        alt="Hero Image"
                        className="w-10/12"
                    />
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

            <div class="custom-shape-divider-bottom-1717531911">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;