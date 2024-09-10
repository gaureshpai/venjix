'use client';

import Link from 'next/link';
import { useState } from 'react';
import '@/public/styles/globals.css';
import LogoContainer from './LogoContainer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Work', href: '/Work' },
        { name: 'Services', href: '/Services' },
        { name: 'About Me', href: '/AboutMe' },
        { name: 'Contact', href: '/Contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto text-center justify-center pt-8 bg-transparent h-[10vh]">
                <div className="h-full text-center flex items-center">
                    <div className="w-full flex justify-between items-center px-4">
                        <div className="flex items-center">
                            <LogoContainer />
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white px-3 py-2 rounded-md text-lg 4xl:text-2xl font-medium hover:text-slate-400 transition duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                title="Menu"
                                className="inline-flex items-center bg-white justify-center p-2 rounded-md text-black hover:text-white hover:bg-white focus:outline-none focus:bg-white focus:text-black transition duration-300"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden fixed top-[10vh] left-0 right-0 bg-black text-white transition-all duration-300 ease-in-out">
                        <div className="flex flex-col px-4 pt-4 pb-6 space-y-4 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-slate-400 flex items-center px-3 py-2 rounded-md text-base bg-black hover:bg-black font-medium transition duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;