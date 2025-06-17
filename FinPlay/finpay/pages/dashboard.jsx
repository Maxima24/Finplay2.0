import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
   
      <div className="space-y-6 py-4 px-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          {/* <div className="flex space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Filter
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Add Transaction
            </button>
          </div> */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Balance */}
          <div className="bg-purple-500 rounded-lg col-span-2 lg:col-span-4 shadow p-8 px-2">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                <svg className="h-6 w-6 text-blue-600" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-black-500">Total Balance</p>
                <p className="text-2xl font-semibold text-gray-900">$24,500.00</p>
              </div>
            </div>
          </div>

          {/* Income */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Demo Wallet</p>
                <p className="text-2xl font-semibold text-gray-900">$5,200.00</p>
              </div>
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-white rounded-lg shadow p-6 col-span-3">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">My Portfolio</p>
                <p className="text-2xl font-semibold text-gray-900">$3,800.00</p>
              </div>
            </div>
          </div>

          {/* Savings */}
         
        </div>

        {/* Start Learning */}
        <div className="bg-white rounded-lg shadow">
          <div className='flex  text-center p-8  justify-center  items-center '>
            <h1 className='text-2xl font-bold text-gray-900'>Start Learning</h1>
            <h3  className='text-1xl  text-gray-900 ml-auto'> see more</h3>
          </div>
          <div className='grid grid-cols-2 py-2 px-2 '>
            <div className='flex justify-center items-center w-2xs h-2xs'>
              <img 
                src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg" 
                alt="Stock Chart" 
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                }}
              />
            </div>
            <div className='flex flex-col justify-start items-start'>
              <h2 className="text-xl font-semibold mb-4">Financial Technologies</h2>
              
              {/* Progress Bar */}
              <div className="w-full mb-2">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Learning Progress</span>
                  <span className="text-sm font-medium text-purple-600">6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '6%' }}></div>
                </div>
              </div>

              {/* Status Items */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Completed: Basic Trading</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">In Progress: Market Analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Upcoming: Advanced Strategies</span>
                </div>
              </div>
              
              <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors' onClick={()=>navigate('/learning')}>
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Dashboard; 