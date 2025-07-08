import React from 'react';
import Image from 'next/image';

const EditorProfileComponent = () => {
    return (
        <div className="bg-black text-white py-16 max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                <div className="relative h-[75vh] w-auto">
                    <Image
                        src="/images/vivek.jpg"
                        alt="Editor & Filmmaker"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="shadow-2xl w-auto h-auto"
                    />
                </div>
                <div className="flex flex-col justify-between h-full p-8 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">EFFICIENT</h3>
                        <p className="text-gray-300">
                            As an efficient video editor, my focus is on delivering high-quality results while optimizing time and resources.
                            My goal is to meet tight deadlines and maintain consistent quality, making sure each project is completed smoothly and effectively, tailored to client needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">PROFESSIONAL</h3>
                        <p className="text-gray-300">
                            As a dedicated and professional video editor, I pride myself on delivering polished, high-quality content that aligns with client goals and vision. 
                            With years of experience in the industry, I bring a strong sense of responsibility, attention to detail, and a commitment to excellence to every project.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">EXPERIENCED</h3>
                        <p className="text-gray-300">
                            As an experienced video editor, I bring a wealth of knowledge and creativity to every project. 
                            With years of hands-on work across diverse industries—ranging from film and television to corporate and digital media—I have honed my technical skills and artistic vision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorProfileComponent;
