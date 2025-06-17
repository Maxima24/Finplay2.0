import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topics = [
  {
    id: 1,
    title: 'Trading Strategies',
    description: 'Share and discuss different trading strategies',
    posts: 128,
    members: 450,
    lastActivity: '2 hours ago',
    category: 'Strategy'
  },
  {
    id: 2,
    title: 'Market Analysis',
    description: 'Technical and fundamental analysis discussions',
    posts: 256,
    members: 780,
    lastActivity: '5 minutes ago',
    category: 'Analysis'
  },
  {
    id: 3,
    title: 'Beginner Questions',
    description: 'Ask questions and get help from experienced traders',
    posts: 512,
    members: 1200,
    lastActivity: '1 hour ago',
    category: 'Support'
  },
  {
    id: 4,
    title: 'Trading Psychology',
    description: 'Discuss mindset and emotional aspects of trading',
    posts: 89,
    members: 320,
    lastActivity: '3 hours ago',
    category: 'Psychology'
  }
];

const recentPosts = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    title: 'My experience with swing trading',
    content: 'I\'ve been practicing swing trading for the past month and here\'s what I learned...',
    likes: 24,
    comments: 8,
    timeAgo: '2 hours ago',
    category: 'Strategy'
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith',
    title: 'Best indicators for day trading?',
    content: 'Looking for recommendations on the most reliable indicators for day trading...',
    likes: 15,
    comments: 12,
    timeAgo: '4 hours ago',
    category: 'Analysis'
  },
  {
    id: 3,
    author: 'Mike Johnson',
    avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson',
    title: 'How to handle trading losses?',
    content: 'I\'ve been struggling with accepting losses and moving forward...',
    likes: 32,
    comments: 15,
    timeAgo: '6 hours ago',
    category: 'Psychology'
  }
];

const Community = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('topics');

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-lg text-gray-600">Community</h3>
        <h2 className="text-2xl font-bold text-gray-900">Connect with fellow traders</h2>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('topics')}
            className={`${
              activeTab === 'topics'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Topics
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`${
              activeTab === 'posts'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Recent Posts
          </button>
        </nav>
      </div>

      {/* Topics Section */}
      {activeTab === 'topics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {topic.category}
                  </span>
                  <span className="text-sm text-gray-500">{topic.lastActivity}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{topic.posts} posts</span>
                    <span>{topic.members} members</span>
                  </div>
                  <button
                    onClick={() => navigate(`/community/topic/${topic.id}`)}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    View Topic
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recent Posts Section */}
      {activeTab === 'posts' && (
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                        <p className="text-sm text-gray-500">
                          Posted by {post.author} • {post.timeAgo}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-purple-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-purple-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post.comments}</span>
                      </button>
                      <button
                        onClick={() => navigate(`/community/post/${post.id}`)}
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create New Post Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate('/community/create-post')}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Community; 