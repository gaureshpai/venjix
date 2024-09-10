import React from 'react';

const AboutMeVid = () => {
    return (
        <div className="flex justify-center items-center bg-black md:py-16 md:px-36 lg:px-40">
            <video
                src="images/bg.mp4"
                autoPlay
                loop
                muted
                className="w-full shadow-2xl"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AboutMeVid;
