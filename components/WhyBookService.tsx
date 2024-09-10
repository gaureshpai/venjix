'use client'

import React from 'react';
import Image from 'next/image';
import { BiCheckCircle } from 'react-icons/bi';

const WhyBookService = () => {
    const points = [
        "Lorem ipsum dolor sit amet",
        "Sed ut perspiciatis unde omnis",
        "Duis aute irure dolor in reprehenderit",
        "Sunt in culpa qui officia deserunt"
    ];

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[350px] md:h-[550px]">
                    <Image
                        src="/images/img.jpg"
                        alt="Editor & Filmmaker"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="shadow-2xl"
                    />
                </div>
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Why book my service?</h1>
                    <p className="text-lg mb-6">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure.
                    </p>
                    <div className="pl-6 space-y-4">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-center text-lg">
                                <BiCheckCircle className="text-[#97C584] mr-2" size={24} />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBookService;
