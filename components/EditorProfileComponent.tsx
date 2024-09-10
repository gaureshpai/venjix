import React from 'react';
import Image from 'next/image';

const EditorProfileComponent = () => {
    return (
        <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                <div className="relative h-[350px] md:h-[550px]">
                    <Image
                        src="/images/AlbenSigamani.jpg"
                        alt="Editor & Filmmaker"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="shadow-2xl"
                    />
                </div>
                <div className="flex flex-col justify-between h-full p-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">EFFICIENT</h3>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">PROFESSIONAL</h3>
                        <p className="text-gray-300">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">EXPERIENCED</h3>
                        <p className="text-gray-300">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorProfileComponent;
