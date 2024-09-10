import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const LogoContainer = () => {
    return (
        <div className="flex justify-center items-center">
            <Link href='/'>
                <Image
                    className="cursor-pointer"
                    src="/images/logo.png"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </Link>
        </div>
    );
};

export default LogoContainer;