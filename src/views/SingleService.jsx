import React, { useEffect, useState } from 'react';
import { getServiceByCategory } from '@/lib/utils/asyncMock';
import { useParams } from 'react-router-dom';
import { Grid } from 'react-loader-spinner'

export default function SingleService() {
    const { category, id } = useParams();
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchService = async () => {
            const serviceData = await getServiceByCategory(category, id);
            setService(serviceData);
            setLoading(false);
            console.log(serviceData);
        };
        fetchService();
    }, [category, id]);

    return (
            <div className="flex flex-col items-center">
                {loading ? (
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
                ) : (
                    <div key={id} className="text-center text-white">
                        <div className=" p-2">
                            <div className="bg-slate-600 rounded-xl shadow-xl p-4">
                                <h2 className="text-2xl font-bold mb-4">Service Details</h2>
                                <img
                                    className="w-8/12 object-cover rounded-t-3xl mx-auto pb-5"
                                    src={service.image}
                                    alt={service.title}
                                />
                                <div className="grid grid-cols-2 gap-1 pb-5">
                                    <p className="mb-2 font-bold">Service ID:</p>
                                    <span>{id}</span>
                                    <p className="mb-2 font-bold">Title:</p>
                                    <span>{service.title}</span>
                                    <p className="mb-2 font-bold">Description:</p>
                                    <span>{service.description}</span>
                                </div>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

    );
};
