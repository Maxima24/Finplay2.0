import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 sm:space-y-6 py-4 px-3 sm:px-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Balance */}
        <div className="bg-purple-500 rounded-lg col-span-1 sm:col-span-2 lg:col-span-4 shadow p-4 sm:p-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 rounded-md p-2 sm:p-3">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-5">
              <p className="text-xs sm:text-sm font-medium text-black-500">Total Balance</p>
              <p className="text-lg sm:text-2xl font-semibold text-gray-900">$24,500.00</p>
            </div>
          </div>
        </div>

        {/* Income */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-2 sm:p-3">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-5">
              <p className="text-xs sm:text-sm font-medium text-gray-500">Demo Wallet</p>
              <p className="text-lg sm:text-2xl font-semibold text-gray-900">$5,200.00</p>
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 col-span-1 sm:col-span-1 lg:col-span-3">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 rounded-md p-2 sm:p-3">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-5">
              <p className="text-xs sm:text-sm font-medium text-gray-500">My Portfolio</p>
              <p className="text-lg sm:text-2xl font-semibold text-gray-900">$3,800.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Learning */}
      <div className="bg-white rounded-lg shadow">
        <div className='flex flex-col sm:flex-row text-center p-4 sm:p-8 justify-center items-center'>
          <h1 className='text-xl sm:text-2xl font-bold text-gray-900'>Start Learning</h1>
          <h3 className='text-lg sm:text-xl text-gray-900 mt-2 sm:mt-0 sm:ml-auto'>see more</h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-2 px-2 gap-4'>
          <div className='flex justify-center items-center'>
            <div className="w-full max-w-md aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/8ZKZg5v2P6w"
                title="Trading Explained"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-lg"
                style={{ minHeight: '200px', background: '#000' }}
              ></iframe>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start p-4'>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Financial Technologies</h2>
            
            {/* Progress Bar */}
            <div className="w-full mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-600">Learning Progress</span>
                <span className="text-xs sm:text-sm font-medium text-purple-600">6%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                <div className="bg-purple-500 h-2 sm:h-2.5 rounded-full" style={{ width: '6%' }}></div>
              </div>
            </div>

            {/* Status Items */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-600">Completed: Basic Trading</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-600">In Progress: Market Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-600">Upcoming: Advanced Strategies</span>
              </div>
            </div>
            
            <button 
              className='bg-purple-500 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-purple-600 transition-colors text-sm sm:text-base' 
              onClick={()=>navigate('/learning')}
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 