import Link from 'next/link';
import React from 'react';

const ServiceContact = () => {
    return (
        <div className="px-8 py-16 md:px-0 md:py-16 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 bg-white p-4">
                <div className="flex flex-col my-6 md:my-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 px-4 md:px-8 text-black">Have different requirements for your project?</h3>
                </div>
                <div className="flex flex-col my-6 md:my-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 px-4 md:px-8">Need Assistance?</h3>
                    <p className="text-black text-base md:text-sm px-4 md:px-0 text-center">
                        {"If you have any specific requirements, please feel free to share them with me at any time. \
                        I'm always open to tailoring my work to meet your unique needs and ensure the best possible outcome for your project."}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center my-6 md:my-10">
                    <Link
                        href="/Contact"
                        className="bg-[#97C584] text-black py-2 font-bold px-4 md:py-2 md:px-6 text-base md:text-lg hover:bg-transparent hover:text-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceContact;
