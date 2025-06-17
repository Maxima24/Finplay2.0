import React from 'react'
import { useNavigate } from 'react-router-dom'

const lessons = [
    {
        id: 1,
        title: 'Introduction to Trading',
        description: 'Learn the basics of trading and how to get started',
        picture: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        duration: '15 min',
        level: 'Beginner',
        status: 'available'
    },
    {
        id: 2,
        title: 'Market Analysis Fundamentals',
        description: 'Understanding market trends and analysis techniques',
        picture: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        duration: '20 min',
        level: 'Intermediate',
        status: 'locked'
    },
    {
        id: 3,
        title: 'Advanced Trading Strategies',
        description: 'Master advanced trading techniques and risk management',
        picture: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        duration: '25 min',
        level: 'Advanced',
        status: 'locked'
    }
]

function Learning() {
    const navigate = useNavigate()
  return (
    <div className='p-6'>
      <div className='mb-8'>
        <h3 className='text-lg text-gray-600'>Your Learning Path</h3>
        <h2 className='text-2xl font-bold text-gray-900'>Your learning starts here</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
            <div className='relative'>
              <img 
                src={lesson.picture} 
                alt={lesson.title} 
                className='w-full h-48 object-cover'
              />
              <div className='absolute top-2 right-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm'>
                {lesson.level}
              </div>
              {lesson.status === 'locked' && (
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
            </div>
            
            <div className='p-4'>
              <div className='flex justify-between items-center mb-2'>
                <h3 className='text-lg font-semibold text-gray-900'>{lesson.title}</h3>
                <span className='text-sm text-gray-500'>{lesson.duration}</span>
              </div>
              <p className='text-gray-600 mb-4'>{lesson.description}</p>
              
              {lesson.status === 'available' ? (
                <button className='w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors' onClick={() => navigate(`/lesson/${lesson.id}`)}>
                  Start Learning
                </button>
              ) : (
                <div className='text-center'>
                  <p className='text-sm text-gray-500 mb-2'>Complete previous lessons to unlock</p>
                  <button 
                    className='w-full bg-gray-200 text-gray-500 px-4 py-2 rounded-md cursor-not-allowed'
                    disabled
                  >
                    Locked
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className='mt-12 bg-white rounded-lg shadow-md p-6'>
        <h3 className='text-xl font-semibold text-gray-900 mb-4'>Your Progress</h3>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <span className='text-gray-600'>Overall Progress</span>
            <span className='text-purple-600 font-medium'>0%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='bg-purple-500 h-2 rounded-full' style={{ width: '0%' }} />
          </div>
          <p className='text-sm text-gray-500'>Complete the Introduction to Trading lesson to unlock more content</p>
        </div>
      </div>
    </div>
  )
}

export default Learning;