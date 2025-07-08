"use client";

import React, { useState, useEffect } from 'react';

interface PortfolioItem {
    id: number;
    title: string;
    year: number;
    type: string;
    subtype: string;
    yturl: string;
}

interface PlaylistData {
    playlistTitle: string;
    items: { title: string; yturl: string; year: number; subtype: string }[];
}

const PortfolioItemComponent: React.FC<{ item: PortfolioItem }> = ({ item }) => {
    const videoSrc = item.yturl ? `https://www.youtube.com/embed/${item.yturl}` : '';

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
        </div>
    );
};

const Portfolio: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [filter, setFilter] = useState<string>('All');
    const [filters, setFilters] = useState<string[]>(['All']);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const shuffle = (arr: PortfolioItem[]) => {
        return [...arr].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const fetchAllPlaylists = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch('/api/youtube/playlist');
                if (!res.ok) throw new Error('Failed to load playlists');
                const data = await res.json();

                const playlistTitles = data.playlists.map((p: PlaylistData) => p.playlistTitle);
                setFilters(['All', ...playlistTitles]);

                if (filter === 'All') {
                    const allItems = data.playlists.flatMap((p: PlaylistData) =>
                        p.items.map((item: { title: string; yturl: string; year: number; subtype: string }, index: number) => ({
                            ...item,
                            id: index + 1,
                            type: p.playlistTitle,
                        }))
                    );
                    setPortfolioItems(shuffle(allItems));
                } else {
                    const selected = data.playlists.find((p: PlaylistData) => p.playlistTitle === filter);
                    if (selected) {
                        const items = selected.items.map((item: { title: string; yturl: string; year: number; subtype: string }, index: number) => ({
                            ...item,
                            id: index + 1,
                            type: selected.playlistTitle,
                        }));
                        setPortfolioItems(items);
                    } else {
                        setPortfolioItems([]);
                    }
                }
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : 'Something went wrong.');
                setPortfolioItems([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllPlaylists();
    }, [filter]);

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
                                    : 'bg-[#97C584] text-black hover:bg-transparent hover:text-[#97C584]'}`}
                        >
                            {filterType}
                        </button>
                    ))}
                </div>

                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="animate-pulse space-y-4 bg-gray-800 p-4 rounded-md">
                                <div className="w-full h-60 bg-gray-700 rounded" />
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="bg-red-800 text-red-200 border border-red-400 p-4 rounded text-center text-lg">
                        {error}
                    </div>
                )}

                {!isLoading && !error && portfolioItems.length === 0 && (
                    <p className="text-center text-gray-400 text-lg">No videos to show now.</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map(item => (
                        <PortfolioItemComponent key={`${item.yturl}_${item.id}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;