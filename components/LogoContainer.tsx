import React from 'react';
import Image from 'next/image';

const LogoContainer = () => {
    return (
        <div className="relative flex place-items-center before:absolute before:rounded-full
         before:blur-2xl before:content-[''] before:bg-gradient-radial before:from-white before:to-transparent
         before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10
         before:w-full before:h-[300px] before:-translate-x-1/2 after:absolute after:-z-20 after:blur-2xl after:content-[''] 
         after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:dark:from-sky-900 after:dark:via-[#0141ff] 
         after:dark:opacity-40 after:w-full after:h-[180px] after:translate-x-1/3 sm:before:w-[480px] sm:after:w-[240px] 
         before:lg:h-[360px]">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/logo.png"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    );
};

export default LogoContainer;
