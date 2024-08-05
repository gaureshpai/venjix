'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, KeyboardEventHandler } from 'react';
import { FaHome, FaInfoCircle, FaGraduationCap, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaVideo, FaCamera, FaFilm, FaPaintBrush, FaTrophy, FaStar } from 'react-icons/fa';
import '@/public/styles/globals.css';
import Image from 'next/image';

type NavItem = {
    name: string;
    href: string;
    icon: React.ComponentType;
    popoutText: string;
    redirectLinks?: { text: string; url: string }[];
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePopout, setActivePopout] = useState<string | null>(null);
    const popoutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
            if (e.key === 'Escape' && activePopout) {
                setActivePopout(null);
            }
        };

        document.addEventListener('keydown', handleKeyDown as any);
        return () => {
            document.removeEventListener('keydown', handleKeyDown as any);
        };
    }, [activePopout]);

    useEffect(() => {
        if (activePopout && popoutRef.current) {
            popoutRef.current.focus();
        }
    }, [activePopout]);

    const navItems: NavItem[] = [
        {
            name: 'Video Editing',
            href: '/video_editing',
            icon: FaVideo,
            popoutText: 'My video editing work.',
            redirectLinks: [
                { text: 'Projects', url: '/video-projects' },
                { text: 'Tutorials', url: '/video-tutorials' },
            ],
        },
        {
            name: 'Photography',
            href: '/photography',
            icon: FaCamera,
            popoutText: 'My photography work.',
            redirectLinks: [
                { text: 'Gallery', url: '/photo-gallery' },
                { text: 'Workshops', url: '/photo-workshops' },
            ],
        },
        {
            name: 'Cinematography',
            href: '/cinematography',
            icon: FaFilm,
            popoutText: 'My cinematography work.',
            redirectLinks: [
                { text: 'Films', url: '/films' },
                { text: 'Behind the Scenes', url: '/bts' },
            ],
        },
        {
            name: 'Graphic Designing',
            href: '/graphic_designing',
            icon: FaPaintBrush,
            popoutText: 'My graphic design work.',
            redirectLinks: [
                { text: 'Portfolio', url: '/design-portfolio' },
                { text: 'Resources', url: '/design-resources' },
            ],
        },
        {
            name: 'Achievements',
            href: '/achievements',
            icon: FaTrophy,
            popoutText: 'My achievements and awards.',
            redirectLinks: [
                { text: 'Awards', url: '/awards' },
                { text: 'Recognition', url: '/recognition' },
            ],
        },
        {
            name: 'Extra Skills',
            href: '/extra_skills',
            icon: FaStar,
            popoutText: 'My additional skills.',
            redirectLinks: [
                { text: 'Courses', url: '/extra-courses' },
                { text: 'Certifications', url: '/extra-certifications' },
            ],
        },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 text-center justify-center right-0 bg-black shadow-md h-[10vh] transition-opacity duration-300 z-50">
                <div className="h-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-full items-center">
                        <div className="flex items-center">
                            <div className="flex h-full">
                                <Link href="/" legacyBehavior>
                                    <Image
                                        src='/images/logo.png'
                                        alt='logo'
                                        className='max-h-full w-auto cursor-pointer'
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 768px) 100vw, 10vh"
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:block md:float-right relative">
                                <div className="ml-10 flex items-center space-x-4">
                                    {navItems.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex group relative"
                                            onMouseEnter={() => setActivePopout(item.name)}
                                            
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-white px-3 py-2 rounded-md text-sm font-medium text-center"
                                                aria-label={`${item.name} section`}
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                title="Menu"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
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
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon aria-hidden="true" />
                                    <span className="ml-2">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
            {activePopout && (
                <div
                    ref={popoutRef}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="popout-title"
                    className="fixed top-[10vh] left-0 right-0 bg-black border-t border-gray-200 shadow-lg p-4 z-40"
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            setActivePopout(null);
                        }
                    }}
                >
                    <div className="container mx-auto" onMouseLeave={() => setActivePopout(null)}>
                        <h2 id="popout-title" className="text-xl font-bold mb-2">{activePopout}</h2>
                        <p className="mb-4">{navItems.find(item => item.name === activePopout)?.popoutText}</p>
                        <div className="flex space-x-4">
                            {navItems.find(item => item.name === activePopout)?.redirectLinks?.map((link, index) => (
                                <Link key={index} href={link.url} className="text-blue-500 hover:underline">
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h3 className="font-bold mb-2">Quick Navigation:</h3>
                            <div className="flex flex-wrap gap-2">
                                {navItems.map((item, index) => (
                                    <a key={index} href={item.href} className="text-blue-500 hover:underline">
                                        #{item.name.toLowerCase().replace(' ', '-')}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setActivePopout(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="h-[10vh]"></div>
        </>
    );
};

export default Navbar;
