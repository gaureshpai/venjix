'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mail/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();

      if (response.status === 200 && data.result) {
        setFormData({ fullName: '', email: '', message: '' });
        setResponseMessage('Message sent successfully!');
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again.');
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white font-Lora">
      <h1 className="text-6xl mb-12 font-bold p-8">Let’s work together</h1>

      <div className='grid md:grid-cols-2 gap-12 items-start'>
        <div className="p-8 rounded-lg">
          <p className="text-lg mb-8">
            We're excited to hear from you and discuss how we can collaborate on your next project.
            Feel free to reach out using the contact information below or fill out the form.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>contact@example.com</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>123 Main St, City, State 12345</p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="fullName"
                aria-label='Full Name'
                name="fullName"
                placeholder='Full Name'
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-none focus:outline-none"
              />
              <hr className="border-white mt-4" />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                aria-label='Email Address'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-none focus:outline-none"
              />
              <hr className="border-white mt-4" />
            </div>
            <div>
              <textarea
                aria-label='Message'
                id="message"
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-none resize-y focus:outline-none"
              ></textarea>
              <hr className="border-white mt-4" />
            </div>
            <button
              type="submit"
              className="bg-[#97C584] text-black py-2 px-4 hover:bg-transparent hover:text-[#97C584] hover:border-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out font-extrabold"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {responseMessage && (
              <p className={`mt-4 font-bold ${responseMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
