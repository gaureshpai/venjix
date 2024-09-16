import React from 'react';
import Image from 'next/image';

const HomeStudio = () => {
    const studios = [
        { id: 1, name: 'Bhoomi_PhotoWOrld', image: '/images/Bhoomi_PhotoWOrld_Logo.png' },
        { id: 2, name: 'Diamond Photography 1', image: '/images/Diamond Photography  1.png' },
        { id: 3, name: 'NB STUDIOS simple', image: '/images/NB STUDIOS simple.png' },
        { id: 4, name: 'renuka didgital studio logo', image: '/images/renuka didgital studio logo.png' },
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
                                layout="fill"
                                objectFit="contain"
                                className="shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeStudio;