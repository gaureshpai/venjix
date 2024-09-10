import React from 'react';

const BusinessInNumbers = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">My Business in Numbers</h2>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">170+</h3>
                        <p className="text-gray-300">Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">15+</h3>
                        <p className="text-gray-300">Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">1,000+</h3>
                        <p className="text-gray-300">Excepteur sint occaecat cupidatat non proident, sunt</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">95%</h3>
                        <p className="text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInNumbers;
