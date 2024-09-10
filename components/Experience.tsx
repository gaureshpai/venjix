import React from 'react';
import Image from 'next/image';

const Experience = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col space-y-4 md:space-y-6 text-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 p-8">15 Years of experience in the field</h1>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="relative w-full">
                        <Image
                            src="/images/Mask-group.jpg"
                            alt="Experience"
                            width={600}
                            height={200}
                            style={{ objectFit: 'cover' }}
                            className="shadow-2xl" 
                        />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
