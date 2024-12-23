"use client";
import React, { useEffect, useState } from 'react';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Call your API route instead of directly using the YouTube API
        const response = await fetch('/api/youtube-videos');
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Filter out videos with the title "The 404 Podcast"
  const filteredVideos = videos.filter(video => video.snippet.title !== "404: Podcast Not Found");

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">YouTube Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <iframe
                className="w-full h-64"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{video.snippet.title}</h2>
              <p className="text-gray-300">{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
