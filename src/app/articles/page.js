"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=krishnasarathi');
        const data = await response.json();
        console.log("Fetched articles:", data); // Log the data to check if cover_image is available for all articles
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const getRandomSize = () => {
    const colSpan = Math.floor(Math.random() * 2) + 1; // Random number between 1 and 2
    const rowSpan = Math.floor(Math.random() * 2) + 1; // Random number between 1 and 2
    return `col-span-${colSpan} row-span-${rowSpan}`;
  };

  // Create a single "Coming Soon" card
  const comingSoonCard = {
    id: 'coming-soon',
    title: "Coming Soon",
    description: "Stay tuned for more!",
    url: "#",
    cover_image: null, // You can optionally add a placeholder image here if needed
  };

  // Combine real articles with a single "Coming Soon" card to fill the grid
  const articlesToShow = articles.length < 9 ? articles.concat(comingSoonCard) : articles;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">My Articles on Dev.to</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {articlesToShow.map((article) => (
          <div
            key={article.id}
            className={`rounded-lg shadow-md p-4 bg-gray-700 flex flex-col justify-between ${getRandomSize()}`}
            style={{
              backgroundImage: article.cover_image ? `url(${article.cover_image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!article.cover_image && (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg mb-4">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2 bg-gray-800 bg-opacity-75 p-2 rounded break-words">{article.title}</h2>
            <p className="text-lg mb-4 bg-gray-800 bg-opacity-75 p-2 rounded break-words">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              {article.title !== "Coming Soon" ? "Read More" : "Stay Tuned"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
