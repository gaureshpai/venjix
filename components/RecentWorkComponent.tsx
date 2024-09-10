import React from 'react';
import Link from 'next/link';

const RecentWorkComponent = () => {
    const workItems = [
        { title: 'Volkswagen - 2023 Ad', ytUrl: 'https://www.youtube.com/embed/vLgAqeAZiSI' },
        { title: 'Neighborhood - 2022 Film', ytUrl: 'https://www.youtube.com/embed/vLgAqeAZiSI' },
        { title: 'MoveU - 2022 Ad', ytUrl: 'https://www.youtube.com/embed/vLgAqeAZiSI' },
        { title: 'Childhood - 2021 Film', ytUrl: 'https://www.youtube.com/embed/vLgAqeAZiSI' },
        { title: 'Only You - 2020 Music Video', ytUrl: 'https://www.youtube.com/embed/vLgAqeAZiSI' },
        { title: 'The City - 2020 Film', ytUrl: 'https://www.youtube.com/embed/vLgAqeAZiSI' },
    ];

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mx-auto p-8 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Recent Work</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {workItems.map((item) => (
                        <div key={item.title} className="p-6 rounded-lg shadow-lg">
                            <div className="relative w-full h-56 mb-4">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={item.ytUrl}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={item.title}
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        </div>
                    ))}
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
