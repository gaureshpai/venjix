import React from 'react';
import Link from 'next/link';
import works from '@/JSON/works.json'

const RecentWorkComponent: React.FC = async () => {
    const workItems = works.result;

    if (!workItems || workItems.length === 0) {
        return (
            <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 min-h-[80vh]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Recent Work</h2>
                    <p>No recent work items available at the moment.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mx-auto p-8 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Recent Work</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {workItems.map((item) => {
                        const videoId = item.yturl.split('?')[0].split('/').pop();
                        const videoSrc = videoId ? `https://www.youtube.com/embed/${videoId}` : '';
                        return (
                            <div key={item.id} className="p-6 rounded-lg shadow-lg">
                                <div className="relative w-full h-56 mb-4">
                                    {videoSrc ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={videoSrc}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={item.title}
                                            className="rounded-lg"
                                        ></iframe>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                                            <p>Video not available</p>
                                        </div>
                                    )}
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