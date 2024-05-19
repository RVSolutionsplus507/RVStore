import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllServices } from '@/lib/utils/asyncMock';
import { Grid } from 'react-loader-spinner'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const servicesData = await getAllServices();
            setServices(servicesData);
            setLoading(false);
        };

        fetchData();
    }, []);


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

            <div className="grid grid-cols-3 gap-8 justify-center items-center">
                {services.map((service) => (
                    <div key={service.id} className="card bg-slate-100 rounded-t-xl shadow-lg text-center">
                        <img src={service.image} alt={service.title} className="w-11/12 h-auto mx-auto rounded-t-xl " />
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 mb-2">{service.description}</p>
                        {service.category === 'IPTV' ? (
                            <div>
                                {service.price.map((price) => (
                                    <p key={price.id} className="text-xl text-green-500 font-bold">
                                        <span>{price.name}:</span> <span className="font-bold">${price.price}</span>
                                    </p>
                                ))}
                                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 my-2 rounded-xl">
                                    <Link to={`/services/${service.category}`}>Subscribe</Link>
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="text-green-500 text-xl ">
                                    Price: <span className="font-bold">{service.price}</span>
                                </p>
                                <button className=" bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 my-2 rounded">
                                    <Link to={`/services/${service.category}`}>Buy Now</Link>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
