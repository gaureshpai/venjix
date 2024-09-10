import React from 'react';

const AboutMeVid = () => {
    return (
        <div className="flex justify-center items-center bg-black py-16 px-24 md:px-36 lg:px-40">
            <video
                src="images/bg.mp4"
                autoPlay
                loop
                muted
                className="w-fullshadow-2xl"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AboutMeVid;
