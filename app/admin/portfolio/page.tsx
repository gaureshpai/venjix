'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface PortfolioItem {
  id?: string;
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

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/findall`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPortfolioItems(data);
    } catch (error: any) {
      console.error('Failed to fetch portfolio items:', error.message || error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const data = await response.json();
      setPortfolioItems([...portfolioItems, data]);
      setNewItem({ title: '', year: 0, type: '', ytUrl: '' });
    } catch (error) {
      console.error('Failed to create portfolio item:', error);
    }
  };

  const handleUpdate = async () => {
    if (editingIndex !== null && editItem) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/update?id=${editItem.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editItem),
        });
        const updatedItem = await response.json();

        const updatedItems = [...portfolioItems];
        updatedItems[editingIndex] = updatedItem;
        setPortfolioItems(updatedItems);
        setEditingIndex(null);
        setEditItem(null);
      } catch (error) {
        console.error('Failed to update portfolio item:', error);
      }
    }
  };

  const handleDelete = async (index: number) => {
    const itemToDelete = portfolioItems[index];
    if (!itemToDelete.id) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/delete?id=${itemToDelete.id}`, {
        method: 'DELETE',
      });

      setPortfolioItems(portfolioItems.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Failed to delete portfolio item:', error);
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditItem(portfolioItems[index]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white font-Lora min-h-screen">
      <div className="min-h-[10vh]"></div>
      <div className="w-full flex justify-end">
        <Link
          href="/admin"
          className="bg-gray-700 text-white py-2 px-4 rounded mb-8 hover:bg-gray-800 transition duration-300 ease-in-out"
        >
          Go to Admin Page
        </Link>
      </div>
      <h1 className="text-6xl mb-12 font-bold">Portfolio Item CRUD</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
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