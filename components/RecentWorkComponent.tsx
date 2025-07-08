"use client"

import React, { useEffect, useState } from 'react';

interface WorkItem {
  id: number;
  title: string;
  yturl: string;
  year: number;
  type: string;
  subtype: string;
}

const RecentWorkComponent: React.FC = () => {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const shuffle = (arr: WorkItem[]) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchWorkItems = async () => {
      try {
        const res = await fetch('/api/youtube/playlist');
        if (!res.ok) throw new Error('Failed to fetch recent videos');
        const data = await res.json();

        const allItems = data.playlists.flatMap((p: { playlistTitle: string; items: { title: string; yturl: string; year: number; subtype: string }[] }) =>
          p.items.map((item: { title: string; yturl: string; year: number; subtype: string }, index: number) => ({
            id: index + 1,
            title: item.title,
            yturl: item.yturl,
            year: item.year,
            type: p.playlistTitle,
            subtype: item.subtype,
          }))
        );

        const limited = shuffle(allItems).slice(0, 6);
        setWorkItems(limited);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkItems();
  }, []);

  return (
    <div className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Recent Work</h2>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx + 1}
                className="animate-pulse bg-gray-800 p-4 rounded-md space-y-4"
              >
                <div className="w-full h-56 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center text-lg mb-4">
            {error}
          </div>
        )}

        {!loading && !error && workItems.length === 0 && (
          <p>No recent work items available at the moment.</p>
        )}

        {!loading && !error && workItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {workItems.map((item, index) => (
              <div key={index + 1} className="p-6 rounded-lg shadow-lg">
                <div className="relative w-full h-56 mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.yturl}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="/Work"
            className="bg-[#97C584] font-extrabold text-black py-2 px-6 text-lg hover:bg-transparent hover:text-[#97C584] border-[#97C584] border-2 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentWorkComponent;