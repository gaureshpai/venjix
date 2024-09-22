import React from 'react';
import Image from 'next/image';
import serv from '@/JSON/services.json'

const ServiceInfo = () => {
    const services = serv.services;

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="mx-auto p-8 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    Services
                </h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((service) => (
                    <div key={service.title} className="flex flex-col p-8 my-10 shadow-lg border-white border-2 top-8">
                        <div className="relative w-full h-48 mb-6">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                style={{ objectFit: 'cover' }}
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

export default ServiceInfo;
