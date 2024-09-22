import React from 'react';
import Image from 'next/image';
import serv from '@/JSON/services.json'

const ServicesComponent = () => {
    const services = serv.services;

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="mx-auto p-8 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    I can help you with
                </h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((service) => (
                    <div key={service.title} className="flex flex-col p-6 rounded-lg shadow-lg">
                        <div className="relative w-full h-48 mb-6">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className='w-auto h-auto'
                            />
                        </div>
                        <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesComponent;
