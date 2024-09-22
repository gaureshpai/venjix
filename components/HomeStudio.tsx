import React from 'react';
import Image from 'next/image';
import std from '@/JSON/HomeStudios.json';

const HomeStudio = () => {
    const studios = std.studios;

    return (
        <div className="bg-black text-white py-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                    Past and Present Studio Collaborations
                </h1>

                <div className="flex flex-wrap justify-center gap-8">
                    {studios.map(studio => (
                        <div key={studio.id} className="relative w-36 h-36 md:w-36 md:h-36 lg:w-48 lg:h-48">
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