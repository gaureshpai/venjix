'use client'

import React, { useState, useEffect } from 'react';

interface PortfolioItem {
    id: number;
    title: string;
    year: number;
    type: string;
    subtype: string;
    yturl: string;
}

interface PortfolioData {
    status: number;
    _comment: string;
    _types: string;
    _subtype: string;
    result: PortfolioItem[];
}

const PortfolioItemComponent: React.FC<{ item: PortfolioItem }> = ({ item }) => {
    const videoId = item.yturl;
    const videoSrc = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

    return (
        <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {videoSrc && (
                <iframe
                    src={videoSrc}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-60 md:h-72 lg:h-80 object-cover"
                ></iframe>
            )}
            <div>
                <h3 className="text-xl font-semibold text-center">
                    {item.year} - {item.subtype !== 'None' ? item.subtype : ''} {item.type !== 'None' ? item.type : ''}
                </h3>
            </div>
        </div>
    );
};

const Portfolio: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [filter, setFilter] = useState<string>('All');

    useEffect(() => {
        const loadPortfolio = async () => {
            try {
                const data: PortfolioData = await import('@/JSON/portfolio.json');
                setPortfolioItems(data.result);
            } catch (error) {
                console.error("Error loading portfolio data:", error);
            }
        };

        loadPortfolio();
    }, []);

    const filters = ['All', 'Teasers', 'Full Videos', 'Highlights', 'Reels'];

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.type === filter);

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
                    {filteredItems.map(item => (
                        <PortfolioItemComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;