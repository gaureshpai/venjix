'use client'

import React, { useState } from 'react';

interface PortfolioItemType {
    title: string;
    year: number;
    type: string;
    ytUrl: string;
}

const portfolioItems: PortfolioItemType[] = [
    { title: "Only you", year: 2020, type: "Music Video", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Childhood", year: 2021, type: "Film", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "MoveU", year: 2022, type: "Commercial", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Third Video", year: 2022, type: "Music Video", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The city", year: 2020, type: "Film", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Neighborhood", year: 2022, type: "Film", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Second Video", year: 2021, type: "Music Video", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Volkswagen", year: 2020, type: "Commercial", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Dream Team", year: 2023, type: "Film", ytUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const PortfolioItem: React.FC<{ item: PortfolioItemType }> = ({ item }) => (
    <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <iframe
            src={item.ytUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-60 md:h-72 lg:h-80 object-cover"
        ></iframe>
        <div className="">
            <h3 className="text-xl font-semibold text-center">{item.title} - {item.year} {item.type}</h3>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>('All');

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.type === filter);

    const filters = ['All', 'Music Video', 'Film', 'Commercial'];

    return (
        <div className="text-white py-16 px-8 md:px-16 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center p-8">My Portfolio</h2>

                <div className="flex flex-wrap gap-4 mb-12 text-center justify-center">
                    {filters.map(filterType => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            className={`py-2 font-extrabold px-6 text-lg border-2 border-[#97C584] transition-colors duration-300 ease-in-out
                                ${filter === filterType
                                    ? 'bg-black text-[#97C584]'
                                    : 'bg-[#97C584] text-black hover:bg-transparent hover:text-[#97C584]'
                                }`}
                        >
                            {filterType}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <PortfolioItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
