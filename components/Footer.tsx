import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-t-2 border-white" />
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">
              Copyright &copy; {new Date().getFullYear()} Venjix | Powered by <a href='https://kreekarvat.in' className='no-underline text-gray-400'>Kreekarvat Technologies</a>
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://twitter.com/venjix07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/venjix07/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@venjix1.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;