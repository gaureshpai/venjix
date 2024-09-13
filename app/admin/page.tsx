'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === 'authenticated' && !session?.user) {
      router.push('/');
    }
  }, [session, status, router]);

  const handleLogout = () => {
    signOut().then(() => router.push('/'));
  };

  const crudPages = [
    { name: 'CRUD Work Items', path: '/admin/work' },
    { name: 'CRUD Film Items', path: '/admin/film' },
    { name: 'CRUD Portfolio Items', path: '/admin/portfolio' },
  ];

  return (
    <section className="flex w-[100vw] fixed flex-col h-screen p-6 bg-gray-900 text-white overflow-hidden">
      <div className='min-h-[10vh]'></div>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className='w-100 justify-end flex'>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crudPages.map((page) => (
            <button
              key={page.path}
              onClick={() => router.push(page.path)}
              className="py-4 px-6 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              {page.name}
            </button>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Page;
