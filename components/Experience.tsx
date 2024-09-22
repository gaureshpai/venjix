import React from 'react';
import Image from 'next/image';

const Experience = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col space-y-4 md:space-y-6 text-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 p-8">5+ Years of experience in the field</h1>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="relative w-full">
                        <Image
                            src="/images/experience.png"
                            alt="Experience"
                            width={600}
                            height={200}
                            style={{ objectFit: 'cover' }}
                            className="shadow-2xl w-auto h-auto" 
                        />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
                        With five years of hands-on experience in video editing, I have developed a strong expertise in transforming raw footage into captivating stories. 
                        My journey has allowed me to work across various genres, including commercials, documentaries, and social media content, honing my skills in cutting, color correction, sound design, and visual effects. 
                        I thrive on creative challenges and am committed to delivering high-quality results that align with client visions. 
                        My experience has taught me the importance of effective collaboration and clear communication, ensuring a smooth editing process and a final product that resonates with audiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
