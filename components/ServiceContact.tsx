import React from 'react';

const ServiceContact = () => {
    return (
        <div className="text-black py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 bg-white">
                <div className="flex flex-col p-8 my-10">
                    <h3 className="text-4xl font-bold mb-4">Have different requirements for your project?</h3>
                </div>
                <div className="flex flex-col p-8 my-10">
                    <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
                    <p className="text-black">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center p-8 my-10">
                    <a
                        href="/Contact"
                        className="bg-[#97C584] text-black py-2 font-extrabold px-6 text-lg hover:bg-transparent hover:text-green-400 hover:border-green-400 border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceContact;
