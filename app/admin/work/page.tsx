'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface WorkItem {
  _id?: string;
  title: string;
  ytUrl: string;
}

const WorkItemCRUD: React.FC = () => {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [newItem, setNewItem] = useState<WorkItem>({ title: '', ytUrl: '' });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<WorkItem | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/findall`)
      .then((res) => res.json())
      .then((data) => setWorkItems(data))
      .catch((err) => console.error('Error fetching work items:', err));
  }, []);

  const handleCreate = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const createdItem = await response.json();
      setWorkItems([...workItems, createdItem]);
      setNewItem({ title: '', ytUrl: '' });
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleUpdate = async () => {
    if (editingIndex !== null && editItem && editItem._id) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/update?id=${editItem._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editItem),
        });
        if (response.ok) {
          const updatedItems = [...workItems];
          updatedItems[editingIndex] = editItem;
          setWorkItems(updatedItems);
          setEditingIndex(null);
          setEditItem(null);
        }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  const handleDelete = async (index: number) => {
    const itemToDelete = workItems[index];
    if (itemToDelete._id) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/delete?id=${itemToDelete._id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setWorkItems(workItems.filter((_, i) => i !== index));
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditItem(workItems[index]);
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

        {editingIndex !== null && (
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Edit Work Item</h2>
            <input
              type="text"
              placeholder="Title"
              value={editItem?.title || ''}
              onChange={(e) => setEditItem({ ...editItem!, title: e.target.value })}
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
        <h2 className="text-2xl font-semibold mb-4">Work Items</h2>
        <ul>
          {workItems.map((item, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-800 rounded-lg flex items-center justify-between">
              <div>
                <strong>{item.title}</strong>
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

export default WorkItemCRUD;