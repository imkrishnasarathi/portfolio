"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import LoadingBar from 'react-top-loading-bar';

const DEFAULT_IMAGE = 'https://via.placeholder.com/400x200?text=No+Image';

const Page = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        loadingBarRef.current.continuousStart();
        setLoading(true);
        const response = await fetch('https://dev.to/api/articles?username=krishnasarathi');
        const data = await response.json();
        console.log("Fetched articles:", data);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
        loadingBarRef.current.complete();
      }
    };

    fetchArticles();
  }, []);

  const getRandomSize = () => {
    const colSpan = Math.floor(Math.random() * 2) + 1;
    const rowSpan = Math.floor(Math.random() * 2) + 1;
    return `col-span-${colSpan} row-span-${rowSpan}`;
  };

  return (
    <div className="p-6 min-h-screen">
      <LoadingBar color="#3B82F6" ref={loadingBarRef} />
      <h1 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-white">
        My Articles on Dev.to
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className={`rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-between ${getRandomSize()}`}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={article.cover_image || article.social_image || DEFAULT_IMAGE}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  {article.title}
                </h2>
                <p className="text-gray-300 mb-4">{article.description}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg text-center transition duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Read Article
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
