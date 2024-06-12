import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-loader-spinner';
import { useServices } from '@/hooks/useServices';

const Services = () => {
    const { services, loading } = useServices();

    return (
        <div className="mt-10 flex justify-center items-center">
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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center items-center">
                {services.map((service) => (
                    <div key={service.id} className="card bg-slate-100 rounded-t-xl shadow-lg text-center h-full">
                        <img src={service.image} alt={service.title} className="w-11/12 h-auto object-fit mx-auto rounded-t-xl mt-6" />
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 mb-2 overflow-hidden">{service.description}</p>
                        {service.category === 'IPTV' ? (
                            <div>
                                {service.price.map((price) => (
                                    <p key={service.id} className="text-xl text-green-500 font-bold">
                                        <span>{price.name}:</span> <span className="font-bold">${price.price}</span>
                                    </p>
                                ))}
                                <div className="flex justify-center items-end">
                                    <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 my-2 rounded-xl">
                                        <Link to={`/service/${service.category}/${service.id}`}>Subscribe</Link>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className="text-green-500 text-xl ">
                                    Price: <span className="font-bold">{service.price}</span>
                                </p>
                                <div className="flex justify-center items-end">
                                    <button className=" bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 my-2 rounded">
                                        <Link to={`/service/${service.category}/${service.id}`}>Buy Now</Link>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
