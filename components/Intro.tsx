import React from 'react';
import Image from 'next/image';

const Intro = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[350px] md:h-[550px]">
                    <Image
                        src="/images/AlbenSigamani.jpg"
                        alt="Editor & Filmmaker"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="shadow-2xl"
                    />
                </div>
                <div className="flex flex-col justify-evenly h-full p-8">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">I’m Vivek, a professional video editor & film maker</h1>
                        <p className="text-gray-300 mb-8 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                        </p>
                        <a
                            href="/resume"
                            className="inline-block bg-[#97C584] text-black py-2 px-6 hover:bg-transparent hover:text-[#97C584] border-2 border-[#97C584] transition duration-300 ease-in-out font-extrabold"
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
