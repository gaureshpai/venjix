'use client'

import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';

interface WorkItem {
  _id: string;
  title: string;
  ytUrl: string;
}

interface ApiResponse {
  status: number;
  result: WorkItem[];
}

const WorkItemCRUD: React.FC = () => {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [newItem, setNewItem] = useState<Omit<WorkItem, '_id'>>({ title: '', ytUrl: '' });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<WorkItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWorkItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/findall`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();
      if (data.status === 200) {
        setWorkItems(data.result);
      } else {
        throw new Error(`API returned status ${data.status}`);
      }
    } catch (error: any) {
      setError(`Failed to fetch work items: ${error.message || error}`);
      console.error('Failed to fetch work items:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWorkItems();
  }, [fetchWorkItems]);

  const handleCreate = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const data: ApiResponse = await response.json();
      if (data.status === 200 && data.result.length > 0) {
        setWorkItems(prevItems => [...prevItems, data.result[0]]);
        setNewItem({ title: '', ytUrl: '' });
      } else {
        throw new Error(`Failed to create item: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error('Failed to create work item:', error);
    }
  };

  const handleUpdate = async () => {
    if (editingIndex !== null && editItem) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/update?id=${editItem._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editItem),
        });
        const data: ApiResponse = await response.json();
        if (data.status === 200 && data.result.length > 0) {
          setWorkItems(prevItems => {
            const newItems = [...prevItems];
            newItems[editingIndex] = data.result[0];
            return newItems;
          });
          setEditingIndex(null);
          setEditItem(null);
        } else {
          throw new Error(`Failed to update item: ${JSON.stringify(data)}`);
        }
      } catch (error) {
        console.error('Failed to update work item:', error);
      }
    }
  };

  const handleDelete = async (index: number) => {
    const itemToDelete = workItems[index];
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/delete?id=${itemToDelete._id}`, {
        method: 'DELETE',
      });
      const data: ApiResponse = await response.json();
      if (data.status === 200) {
        setWorkItems(prevItems => prevItems.filter((_, i) => i !== index));
      } else {
        throw new Error(`Failed to delete item: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error('Failed to delete work item:', error);
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditItem(workItems[index]);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
      <h1 className="text-6xl mb-12 font-bold">Work Item CRUD</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="p-8 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-6">Create Work Item</h2>
          <input
            type="text"
            placeholder="Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
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

        {editingIndex !== null && editItem && (
          <div className="p-8 rounded-lg bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Edit Work Item</h2>
            <input
              type="text"
              placeholder="Title"
              value={editItem.title}
              onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
              className="w-full px-3 py-2 bg-transparent text-white placeholder-white border-b border-white focus:outline-none mb-4"
            />
            <input
              type="text"
              placeholder="YouTube URL"
              value={editItem.ytUrl}
              onChange={(e) => setEditItem({ ...editItem, ytUrl: e.target.value })}
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
        <h2 className="text-2xl font-semibold mb-4">Work Items</h2>
        <ul>
          {workItems.map((item, index) => (
            <li key={item._id} className="mb-4 p-4 bg-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <strong>{item.title}</strong>
                <div>YouTube URL: {item.ytUrl}</div>
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

export default WorkItemCRUD;