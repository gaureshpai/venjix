import React from 'react';
import Image from 'next/image';
import { BiCheckCircle } from 'react-icons/bi';

const WhyBookService = () => {
    const points = [
        "Over 5 years of professional video editing experience",
        "Tailored editing solutions that match your unique vision",
        "Quick turnaround times without compromising on quality",
        "Seamless collaboration with clients to ensure satisfaction",
        "Extensive expertise in various editing software and techniques",
        "High approval rates with a track record of repeat clients"
    ];

    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[350px] md:h-[550px]">
                    <Image
                        src="/images/services.jpg"
                        alt="Editor & Filmmaker"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="shadow-2xl"
                    />
                </div>
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Why book my service?</h1>
                    <p className="text-lg mb-6">
                        {"With years of experience in the field, I offer high-quality video editing services designed\
                        to bring your project to life. Whether you're working on a personal project or a professional production,\
                        I will ensure the final product exceeds your expectations."}
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