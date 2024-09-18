import React from 'react';
import Link from 'next/link';

const VideoContainer = () => {
    return (
        <div className="relative h-screen w-full">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/images/mmm.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-8 md:px-24 lg:px-36">
                <div className="max-w-3xl">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 font-mono leading-tight">
                        Turning Videos into
                    </h1>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 font-mono leading-tight">
                        Cinematic Masterpieces
                    </h1>
                    <Link href="/Contact">
                        <button className="bg-[#97C584] font-extrabold text-black py-2 px-6 text-lg hover:bg-transparent hover:text-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;