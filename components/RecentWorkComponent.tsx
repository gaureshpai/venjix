'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface WorkItem {
    id: string;
    title: string;
    yturl: string;
}

interface ApiResponse {
    status: number;
    result: WorkItem[];
}

const RecentWorkComponent: React.FC = () => {
    const [workItems, setWorkItems] = useState<WorkItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkItems = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/findall`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: ApiResponse = await response.json();
                if (data.status === 200) {
                    setWorkItems(data.result.slice(0, 6));
                } else {
                    throw new Error(`API returned status ${data.status}`);
                }
            } catch (error: any) {
                setError(`Failed to fetch work items: ${error.message || error}`);
                console.error('Failed to fetch work items:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWorkItems();
    }, []);

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mx-auto p-8 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Recent Work</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {workItems.map((item) => {
                        const videoId = item.yturl.split('?')[0].split('/').pop();
                        const videoSrc = `https://www.youtube.com/embed/${videoId}`;
                        return (
                            <div key={item.id} className="p-6 rounded-lg shadow-lg">
                                <div className="relative w-full h-56 mb-4">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={videoSrc}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={item.title}
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-8 text-center">
                    <Link
                        href="/Work"
                        className="bg-[#97C584] font-extrabold text-black py-2 px-6 text-lg hover:bg-transparent hover:text-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentWorkComponent;