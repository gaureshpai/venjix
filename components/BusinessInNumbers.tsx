import React from 'react';

const BusinessInNumbers = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">My Business in Numbers</h2>
                    <p className="text-gray-300">
                        I am proud to have worked with numerous clients and studios, delivering high-quality video edits and maintaining a high approval rate.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">200+</h3>
                        <p className="text-gray-300">Client projects edited with precision</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">10+</h3>
                        <p className="text-gray-300">Studios partnered for creative excellence</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">500+</h3>
                        <p className="text-gray-300">Videos edited, bringing visions to life</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-2 text-[#97C584]">90%</h3>
                        <p className="text-gray-300">Approval rate, ensuring client satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInNumbers;
