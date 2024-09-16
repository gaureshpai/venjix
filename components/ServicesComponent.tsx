import React from 'react';
import Image from 'next/image';

const ServicesComponent = () => {
    const services = [
        {
            title: 'Editing',
            description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
            image: '/images/s1.jpg'
        },
        {
            title: 'Color Correction',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.',
            image: '/images/s2.jpg'
        },
        {
            title: 'Sound Design',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
            image: '/images/s3.jpg'
        }
    ];

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
