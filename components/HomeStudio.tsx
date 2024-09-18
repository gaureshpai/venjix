import React from 'react';
import Image from 'next/image';

const HomeStudio = () => {
    const studios = [
        { id: 1, name: 'Bhoomi_PhotoWOrld', image: '/images/Studios/1.png' },
        { id: 2, name: 'Diamond Photography 1', image: '/images/Studios/2.png' },
        { id: 3, name: 'NB STUDIOS simple', image: '/images/Studios/3.png' },
        { id: 4, name: 'renuka didgital studio logo', image: '/images/Studios/4.png' },
    ];

    return (
        <div className="bg-black text-white py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                    Past and Present Studio Collaborations
                </h1>

                <div className="flex flex-wrap justify-center gap-8">
                    {studios.map(studio => (
                        <div key={studio.id} className="relative w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60">
                            <Image
                                src={studio.image}
                                alt={studio.name}
                                fill
                                className="shadow-lg object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeStudio;