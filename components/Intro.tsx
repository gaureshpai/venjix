import React from 'react';
import Image from 'next/image';

const Intro = () => {
    return (
        <div className="bg-black text-white pb-16 px-8 md:px-16 lg:px-24 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[75vh]">
                    <Image
                        src="/images/vivek.jpg"
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
                            As a professional video editor, I specialize in transforming raw footage into compelling visual stories.
                            With expertise in industry-standard software and a deep understanding of pacing, color grading, sound design, and visual effects, I bring creativity and precision to every project.
                            My experience spans various genres, including film, commercials, corporate videos, and digital content, ensuring that each project is tailored to meet specific goals and audiences.
                            Committed to delivering high-quality, polished results, I collaborate closely with clients to bring their vision to life, ensuring a seamless and impactful final product.
                        </p>
                        <a
                            href="/documents/resume.pdf"
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
