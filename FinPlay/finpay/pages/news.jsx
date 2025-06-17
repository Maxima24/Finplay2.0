import React, { useState, useEffect } from 'react';
import NavLayout from '../components/navLayout';
import { getCryptoNews, getNewsByCategory } from '../services/news';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'Blockchain', name: 'Blockchain' },
    { id: 'Mining', name: 'Mining' },
    { id: 'Trading', name: 'Trading' },
    { id: 'Technology', name: 'Technology' }
  ];

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = selectedCategory === 'all' 
        ? await getCryptoNews()
        : await getNewsByCategory(selectedCategory);
      setNews(data);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
   
      <div className=" bg-gray-50">
        <div className="max-w-7xl  sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Crypto News</h1>
            <p className="mt-2 text-gray-600">Stay updated with the latest in cryptocurrency and blockchain</p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* News Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=Crypto+News';
                      }}
                    />
                    <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="text-sm text-gray-500">{item.source}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && news.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No news articles found for this category.</p>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default News;