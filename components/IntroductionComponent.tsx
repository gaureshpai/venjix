import React from 'react';
import Link from 'next/link';

const IntroductionComponent = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 grid md:grid-cols-2">
            <div className="mx-auto p-8">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    I'm Vivek, a professional video editor & film maker
                </h2>
            </div>
            <div className='p-8'>
                <p className="text-lg mb-8 text-gray-300">
                   As a highly skilled video editor with a passion for storytelling, I specialize in transforming raw footage into captivating visual narratives. 
                   With a keen eye for detail and a deep understanding of video editing software, I seamlessly blend sound, visuals, and effects to create engaging content. 
                   Whether it’s crafting cinematic sequences, promotional videos, or social media content, my focus is on delivering high-quality, polished videos that resonate with audiences.
                </p>
                <Link href="/AboutMe">
                    <button className="bg-[#97C584] text-black py-2 font-extrabold px-6 text-lg hover:bg-transparent hover:text-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IntroductionComponent;