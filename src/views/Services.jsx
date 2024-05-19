import React, { useEffect, useState } from 'react';
import { getServices } from '@/lib/utils/asyncMock';
import { useParams, Link } from 'react-router-dom';
import { Grid } from 'react-loader-spinner'


const Services = () => {
    const { category } = useParams();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchServices = async () => {
            const servicesData = await getServices();
            setServices(servicesData.services);
            setLoading(false);
        };

        fetchServices();
    }, []);

    const filteredServices = services.filter(service => service.category === category);

    return (
        <div className="flex flex-wrap justify-center items-center">
            {loading && (
                <Grid
                    visible={true}
                    height="700"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                />
            )}
            {category === 'IPTV' ? (
                filteredServices.map((service) => (
                    <div
                        key={service.id}
                        className="max-w-sm mx-4 my-4 rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 "
                    >
                        <img
                            className="w-9/12 h-50 object-cover rounded-t-3xl"
                            src={service.image.url}
                            alt={service.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-gray-800">{service.title}</div>
                            <p className="text-gray-600 text-base">{service.description}</p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200">
                            <h4 className="font-bold mb-2 text-gray-800">Price:</h4>
                            <ul className="list-disc pl-4 text-gray-600">
                                {service.price.map((price) => (
                                    <li key={price.id} className="mb-1">
                                        <span className="font-medium">{price.name}: </span>
                                        <span className="inline-block mr-1">$</span>
                                        {price.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {
                            service.channels && (
                                <div className="px-6 py-4 border-t border-gray-200">
                                    <h4 className="font-bold mb-2 text-gray-800">Channels:</h4>
                                    <p className="text-gray-600 text-base">{service.channels}</p>
                                </div>
                            )
                        }
                        <div className="px-6 py-4 border-t border-gray-200">
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-xl">
                                <Link to={`/service/${category}/${service.id}`}>Suscribe
                                </Link>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                filteredServices.map((service) => (
                    <div key={service.id} className="max-w-sm mx-4 my-4 rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 ">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{service.title}</div>
                            <p className="text-gray-700 text-base">{service.description}</p>
                        </div>
                        <div className="px-6 py-4">
                            <h4 className="font-bold mb-2">Price:</h4>
                            <ul>
                                <li className="text-gray-700 text-base font-bold">
                                    <span className="mr-1">$</span>
                                    {service.price}
                                </li>
                            </ul>
                        </div>
                        <div className="px-6 py-4">
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                                <Link to={`/service/${category}/${service.id}`}>Buy Now
                                </Link>
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Services;