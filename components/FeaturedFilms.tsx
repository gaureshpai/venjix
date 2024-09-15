'use client'

import React from 'react';

const films = [
    {
        title: "DREAM TEAM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        ytUrl: "https://www.youtube.com/embed/vLgAqeAZiSI"
    },
    {
        title: "THE CITY",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
        ytUrl: "https://www.youtube.com/embed/vLgAqeAZiSI"
    },
    {
        title: "NEIGHBORHOOD",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
        ytUrl: "https://www.youtube.com/embed/vLgAqeAZiSI"
    }
];

const FeaturedFilms = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-12">Featured Videos</h2>

                <div className="space-y-16 md:space-y-24">
                    {films.map((film, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            <div className="flex flex-col justify-center md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-4">{film.title}</h3>
                                <p className="text-gray-300 text-lg">
                                    {film.description}
                                </p>
                            </div>

                            <div className="flex justify-center items-center md:w-1/2">
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={film.ytUrl}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={film.title}
                                        className="absolute inset-0"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedFilms;