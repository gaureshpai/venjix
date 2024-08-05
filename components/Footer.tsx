import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '@/public/styles/globals.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="EMF Logo"
                  className="max-h-[10vh] w-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  priority
                />
              </Link>
            </div>
            <p className="text-sm text-gray-300 text-center">&copy; {new Date().getFullYear()} Venjix. All rights reserved.</p>
            <p className="text-sm text-gray-300 text-center">Developed by Gauresh</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href={`mailto:email`} className="hover:text-blue-400 transition duration-200">email</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href={`tel:phno`} className="hover:text-blue-400 transition duration-200">phno</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <a href='https://maps.app.goo.gl/gkzSSKBUND86B8yp8' className="hover:text-blue-400 transition duration-200">address</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;