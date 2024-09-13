'use client'

import Link from 'next/link';
import React, { useState } from 'react';

interface PortfolioItem {
  title: string;
  year: number;
  type: string;
  ytUrl: string;
}

const PortfolioItemCRUD: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [newItem, setNewItem] = useState<PortfolioItem>({ title: '', year: 0, type: '', ytUrl: '' });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);

  const handleCreate = () => {
    setPortfolioItems([...portfolioItems, newItem]);
    setNewItem({ title: '', year: 0, type: '', ytUrl: '' });
  };

  const handleUpdate = () => {
    if (editingIndex !== null) {
      const updatedItems = [...portfolioItems];
      updatedItems[editingIndex] = editItem!;
      setPortfolioItems(updatedItems);
      setEditingIndex(null);
      setEditItem(null);
    }
  };

  const handleDelete = (index: number) => {
    setPortfolioItems(portfolioItems.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditItem(portfolioItems[index]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white font-Lora min-h-screen">
      <div className='min-h-[10vh]'></div>
      <div className='w-100 justify-end flex'>
        <Link
          href={'/admin'}
          className="bg-gray-700 text-white py-2 w-100 px-4 rounded mb-8 hover:bg-gray-800 transition duration-300 ease-in-out"
        >
          Go to Admin Page
        </Link>
      </div>
      <h1 className="text-6xl mb-12 font-bold">Portfolio Item CRUD</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Create Portfolio Item Section */}
        <div className="p-8 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-6">Create Portfolio Item</h2>
          <input
            type="text"
            placeholder="Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
          />
          <input
            type="number"
            placeholder="Year"
            value={newItem.year}
            onChange={(e) => setNewItem({ ...newItem, year: parseInt(e.target.value) })}
            className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
          />
          <input
            type="text"
            placeholder="Type"
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
          />
          <input
            type="text"
            placeholder="YouTube URL"
            value={newItem.ytUrl}
            onChange={(e) => setNewItem({ ...newItem, ytUrl: e.target.value })}
            className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
          />
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Create
          </button>
        </div>

        {/* Edit Portfolio Item Section */}
        {editingIndex !== null && (
          <div className="p-8 rounded-lg bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Edit Portfolio Item</h2>
            <input
              type="text"
              placeholder="Title"
              value={editItem?.title || ''}
              onChange={(e) => setEditItem({ ...editItem!, title: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <input
              type="number"
              placeholder="Year"
              value={editItem?.year}
              onChange={(e) => setEditItem({ ...editItem!, year: parseInt(e.target.value) })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <input
              type="text"
              placeholder="Type"
              value={editItem?.type || ''}
              onChange={(e) => setEditItem({ ...editItem!, type: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <input
              type="text"
              placeholder="YouTube URL"
              value={editItem?.ytUrl || ''}
              onChange={(e) => setEditItem({ ...editItem!, ytUrl: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Update
            </button>
          </div>
        )}
      </div>

      {/* Display Portfolio Items */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Items</h2>
        <ul>
          {portfolioItems.map((item, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <strong>{item.title}</strong>
                <div>Year: {item.year}</div>
                <div>Type: {item.type}</div>
                <div>{item.ytUrl}</div>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-300 ease-in-out mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioItemCRUD;
