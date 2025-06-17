import React from 'react';
import { useNavigate } from 'react-router-dom';

const achievements = [
  {
    id: 1,
    title: 'First Steps',
    description: 'Complete your first trading lesson',
    icon: '🎯',
    progress: 100,
    status: 'completed',
    reward: '50 points'
  },
  {
    id: 2,
    title: 'Market Analyst',
    description: 'Complete 5 market analysis lessons',
    icon: '📊',
    progress: 60,
    status: 'in-progress',
    reward: '200 points'
  },
  {
    id: 3,
    title: 'Trading Pro',
    description: 'Complete all advanced trading lessons',
    icon: '💼',
    progress: 0,
    status: 'locked',
    reward: '500 points'
  },
  {
    id: 4,
    title: 'Perfect Score',
    description: 'Get 100% on any lesson quiz',
    icon: '🏆',
    progress: 0,
    status: 'locked',
    reward: '100 points'
  },
  {
    id: 5,
    title: 'Early Bird',
    description: 'Complete a lesson before 9 AM',
    icon: '🌅',
    progress: 0,
    status: 'locked',
    reward: '75 points'
  },
  {
    id: 6,
    title: 'Night Owl',
    description: 'Complete a lesson after 9 PM',
    icon: '🌙',
    progress: 0,
    status: 'locked',
    reward: '75 points'
  }
];

const Achievements = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-lg text-gray-600">Your Achievements</h3>
        <h2 className="text-2xl font-bold text-gray-900">Track your progress and earn rewards</h2>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Total Points</p>
              <p className="text-2xl font-semibold text-gray-900">250</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">1/6</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <span className="text-2xl">📈</span>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Next Reward</p>
              <p className="text-2xl font-semibold text-gray-900">200 pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
              achievement.status === 'locked' ? 'opacity-75' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{achievement.icon}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  achievement.status === 'completed' 
                    ? 'bg-green-100 text-green-800'
                    : achievement.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {achievement.status === 'completed' 
                    ? 'Completed'
                    : achievement.status === 'in-progress'
                    ? 'In Progress'
                    : 'Locked'}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-purple-600 font-medium">{achievement.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      achievement.status === 'completed'
                        ? 'bg-green-500'
                        : achievement.status === 'in-progress'
                        ? 'bg-yellow-500'
                        : 'bg-gray-300'
                    }`}
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Reward: {achievement.reward}</span>
                {achievement.status === 'locked' && (
                  <button 
                    onClick={() => navigate('/learning')}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Unlock
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
