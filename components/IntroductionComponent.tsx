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
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                </p>
                <Link href="/about">
                    <button className="bg-green-200 text-black py-2 font-extrabold px-6 text-lg hover:bg-transparent hover:text-green-200 hover:border-green-200 border-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IntroductionComponent;