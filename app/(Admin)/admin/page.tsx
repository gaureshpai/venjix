'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

interface Contact {
  id: number;
  fullName: string;
  email: string;
  message: string;
}

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [deletedContact, setDeletedContact] = useState<Contact | null>(null);

  useEffect(() => {
    if (status === 'authenticated' && !session?.user) {
      router.push('/');
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchContacts = async () => {
      setError(null);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mail/findall`);
        if (!response.ok) throw new Error('Failed to fetch contacts');
        const data = await response.json();
        setContacts(data.result);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      }
    };

    fetchContacts();
  }, []);

  const handleLogout = () => {
    signOut().then(() => router.push('/'));
  };

  const handleDeleteContact = async (id: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mail/delete?id=${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (!response.ok) throw new Error('Failed to delete contact');
      setContacts(contacts.filter(contact => contact.id !== id));
      setDeletedContact(result.Deleted);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <section className="flex flex-col min-h-screen p-6 bg-black text-white">
      <div className='bg-black min-h-[10vh]'></div>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className='flex justify-end'>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </header>
      <main className="flex-grow">
        <div className="bg-slate-950 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Contact Form Data</h2>
            <div>
              {contacts.length > 0 ? (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
                      <div>
                        <p className="text-xl"><strong>Full Name:</strong> {contact.fullName}</p>
                        <p className="text-xl"><strong>Email:</strong> {contact.email}</p>
                        <p className="text-xl"><strong>Message:</strong> {contact.message}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        className="ml-auto bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 self-center"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center">Loading contact form data...</p>
              )}
              {deletedContact && (
                <p className="mt-6 text-green-500">
                 Contact "{deletedContact.fullName}" has been successfully deleted.
                </p>
              )}
            </div>
        </div>
      </main>
    </section>
  );
};

export default Page;