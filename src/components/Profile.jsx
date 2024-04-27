import React, { useState } from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

export default function Profile() {
    const [showModal, setShowModal] = useState(false);

    const handleProfileClick = () => {
        setShowModal(true);
    };

    return (
        <div>
            <button
                className="rounded-full bg-gray-200 p-2"
                onClick={handleProfileClick}
            >
                <RiUser3Line size={32} color='white' />
            </button>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                    <div className="bg-white p-4 absolute top-16 right-5 rounded-md">
                        <div className="flex justify-end">
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 mb-2">
                                <AiOutlineClose size={24} />
                            </button>
                        </div>
                        <h2>Login</h2>
                        <h2>Signup</h2>
                    </div>
                </div>
            )}
        </div>
    );
};
