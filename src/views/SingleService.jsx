import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getService } from '../lib/utils/asyncMock';

export default function SingleService() {
    const [service, setService] = useState({});
    const { id } = useParams(); 

    useEffect(() => {
        const serviceData = getService(id); 
        setService(serviceData);
    }, [id]);

    return (
        <div key={id} className="text-center"> 
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Service Details</h2>
                <p className="mb-2">Service ID: {id}</p>
                <p className="mb-2">Title: {service.title}</p> 
                <p className="mb-2">Description: {service.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
