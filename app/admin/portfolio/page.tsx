'use client'

import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  year: number;
  type: string;
  subtype: string;
  yturl: string;
}

interface ApiResponse {
  status: number;
  result: PortfolioItem[] | PortfolioItem;
}

const PortfolioItemCRUD: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [newItem, setNewItem] = useState<Omit<PortfolioItem, 'id'>>({ title: '', year: 2023, type: '', subtype: '', yturl: '' });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const typeOptions = ['Highlights', 'Teasers', 'Full Videos','Reels','None'];
  const subtypeOptions = ['None',
    'Wedding', 'Pre Wedding', 'Engagement', 'Reception','Baby Shower','Maternity Shoot',
    'Baby Naming','Bridal','Corporate Videos','Tutorials',
    'Event Highlights','Music Videos','Documentaries','Commercials'];

  const fetchPortfolioItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/findall`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();
      if (data.status === 200) {
        setPortfolioItems(data.result as PortfolioItem[]);
      } else {
        throw new Error(`API returned status ${data.status}`);
      }
    } catch (error: any) {
      setError(`Failed to fetch portfolio items: ${error.message || error}`);
      console.error('Failed to fetch portfolio items:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPortfolioItems();
  }, [fetchPortfolioItems]);

  const handleCreate = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const data: ApiResponse = await response.json();
      if (data.status === 200 && data.result) {
        const portfolioItem = Array.isArray(data.result) ? data.result[0] : data.result;
        setPortfolioItems(prevItems => [...prevItems, portfolioItem]);
        setNewItem({ title: '', year: 2023, type: '', subtype: '', yturl: '' });
      } else {
        throw new Error(`Failed to create item: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error('Failed to create portfolio item:', error);
    }
  };

  const handleUpdate = async () => {
    if (editingIndex !== null && editItem) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/update?id=${editItem.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editItem),
        });
        const data: ApiResponse = await response.json();
        if (data.status === 200 && data.result) {
          const updatedItem = Array.isArray(data.result) ? data.result[0] : data.result;
          setPortfolioItems(prevItems => {
            const newItems = [...prevItems];
            newItems[editingIndex] = updatedItem;
            return newItems;
          });
          setEditingIndex(null);
          setEditItem(null);
        } else {
          throw new Error(`Failed to update item: ${JSON.stringify(data)}`);
        }
      } catch (error) {
        console.error('Failed to update portfolio item:', error);
      }
    }
  };

  const handleDelete = async (index: number) => {
    const itemToDelete = portfolioItems[index];
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/delete?id=${itemToDelete.id}`, {
        method: 'DELETE',
      });
      const data: ApiResponse = await response.json();
      if (data.status === 200) {
        setPortfolioItems(prevItems => prevItems.filter((_, i) => i !== index));
      } else {
        throw new Error(`Failed to delete item: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error('Failed to delete portfolio item:', error);
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditItem(portfolioItems[index]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white font-Lora min-h-[80vh]">
      <div className="min-h-[10vh]"></div>
      <div className="w-full flex justify-end top-[10vh] relative">
        <Link
          href="/admin"
          className="bg-gray-700 flex text-white py-2 px-4 rounded mb-8 hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer"
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
          <select
            title='Type'
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            className="w-full px-3 py-2 bg-transparent text-white border-b border-white focus:outline-none mb-4"
          >
            <option value="" disabled>Select Type</option>
            {typeOptions.map(option => (
              <option key={option} value={option} className='bg-gray-800'>{option}</option>
            ))}
          </select>
          <select
            title='Subtype'
            value={newItem.subtype}
            onChange={(e) => setNewItem({ ...newItem, subtype: e.target.value })}
            className="w-full px-3 py-2 bg-transparent text-white border-b border-white focus:outline-none mb-4"
          >
            <option value="" disabled>Select Subtype</option>
            {subtypeOptions.map(option => (
              <option key={option} value={option} className='bg-gray-800'>{option}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="YouTube URL"
            value={newItem.yturl}
            onChange={(e) => setNewItem({ ...newItem, yturl: e.target.value })}
            className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
          />
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Create
          </button>
        </div>

        {editingIndex !== null && editItem && (
          <div className="p-8 rounded-lg bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Edit Portfolio Item</h2>
            <input
              type="text"
              placeholder="Title"
              value={editItem.title}
              onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <input
              type="number"
              placeholder="Year"
              value={editItem.year}
              onChange={(e) => setEditItem({ ...editItem, year: parseInt(e.target.value) })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <select
              title='Type'
              value={editItem.type}
              onChange={(e) => setEditItem({ ...editItem, type: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white border-b border-white focus:outline-none mb-4"
            >
              {typeOptions.map(option => (
                <option key={option} value={option} className='bg-gray-800'>{option}</option>
              ))}
            </select>
            <select
              title='Subtype'
              value={editItem.subtype}
              onChange={(e) => setEditItem({ ...editItem, subtype: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white border-b border-white focus:outline-none mb-4"
            >
              {subtypeOptions.map(option => (
                <option key={option} value={option} className='bg-gray-800'>{option}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="YouTube URL"
              value={editItem.yturl}
              onChange={(e) => setEditItem({ ...editItem, yturl: e.target.value })}
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
            <li key={item.id} className="mb-4 p-4 bg-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <strong>{item.title}</strong>
                <div>Year: {item.year}</div>
                <div>Type: {item.type}</div>
                <div>Subtype: {item.subtype}</div>
                <div>YouTube URL: {item.yturl}</div>
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