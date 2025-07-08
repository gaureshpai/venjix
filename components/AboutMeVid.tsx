import Link from 'next/link';
import React from 'react';

const AboutMeVid = () => {
    return (
        <div className="relative flex justify-center items-center bg-black py-12 px-4 md:py-16 md:px-8 lg:px-12">
            <p className="absolute text-2xl top-4 left-50 text-white bg-opacity-75 px-4 py-2 rounded-lg shadow-lg">
                {"Client's Happy Reaction on my work"}
            </p>
            <video
                src="videos/ClientResponse.mp4"
                controls
                className="w-full max-w-4xl max-h-[70vh] shadow-lg rounded-lg border border-gray-800"
            >
                Your browser does not support the video tag.
            </video>
            <Link href={'https://youtu.be/ShRte3EcSuA?si=gqfLpKX-LOkc9J2o'} className=" absolute bottom-1 bg-[#97C584] text-black py-2 font-bold px-4 md:py-2 md:px-6 text-base md:text-lg hover:bg-transparent hover:text-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                View on youtube
            </Link>
        </div>
    );
};

export default AboutMeVid;