import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const challenges = [
  {
    id: 1,
    title: 'Beginner Trading Challenge',
    description: 'Start your trading journey with this beginner-friendly challenge',
    prize: '$500',
    participants: 245,
    duration: '7 days',
    difficulty: 'Beginner',
    status: 'active',
    progress: 0,
    startDate: '2024-03-20',
    endDate: '2024-03-27',
    requirements: [
      'Complete basic trading course',
      'Minimum account balance: $100',
      'Maximum 3 trades per day'
    ]
  },
  {
    id: 2,
    title: 'Technical Analysis Master',
    description: 'Test your technical analysis skills in this intermediate challenge',
    prize: '$1,000',
    participants: 180,
    duration: '14 days',
    difficulty: 'Intermediate',
    status: 'upcoming',
    progress: 0,
    startDate: '2024-03-25',
    endDate: '2024-04-08',
    requirements: [
      'Complete technical analysis course',
      'Minimum account balance: $500',
      'Maximum 5 trades per day'
    ]
  },
  {
    id: 3,
    title: 'Advanced Trading Championship',
    description: 'The ultimate trading challenge for experienced traders',
    prize: '$5,000',
    participants: 89,
    duration: '30 days',
    difficulty: 'Advanced',
    status: 'upcoming',
    progress: 0,
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    requirements: [
      'Complete all advanced courses',
      'Minimum account balance: $1,000',
      'No trade limit'
    ]
  }
];

const userChallenges = [
  {
    id: 1,
    title: 'Beginner Trading Challenge',
    progress: 35,
    currentRank: 45,
    totalParticipants: 245,
    daysLeft: 5,
    profit: '+$120',
    trades: 12
  }
];

const Challenges = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('available');

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-lg text-gray-600">Trading Challenges</h3>
        <h2 className="text-2xl font-bold text-gray-900">Test your skills and win prizes</h2>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('available')}
            className={`${
              activeTab === 'available'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Available Challenges
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`${
              activeTab === 'active'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            My Active Challenges
          </button>
        </nav>
      </div>

      {/* Available Challenges Section */}
      {activeTab === 'available' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    challenge.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-800'
                      : challenge.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {challenge.difficulty}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    challenge.status === 'active'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {challenge.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Prize Pool</span>
                    <span className="font-semibold text-gray-900">{challenge.prize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold text-gray-900">{challenge.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Participants</span>
                    <span className="font-semibold text-gray-900">{challenge.participants}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Start Date</span>
                    <span className="font-semibold text-gray-900">{formatDate(challenge.startDate)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => navigate(`/challenges/${challenge.id}`)}
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Active Challenges Section */}
      {activeTab === 'active' && (
        <div className="space-y-6">
          {userChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                  <span className="text-sm text-gray-500">{challenge.daysLeft} days left</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Current Rank</p>
                    <p className="text-xl font-semibold text-gray-900">{challenge.currentRank}</p>
                    <p className="text-xs text-gray-500">of {challenge.totalParticipants}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Profit/Loss</p>
                    <p className="text-xl font-semibold text-green-600">{challenge.profit}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Trades</p>
                    <p className="text-xl font-semibold text-gray-900">{challenge.trades}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Progress</p>
                    <p className="text-xl font-semibold text-gray-900">{challenge.progress}%</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Overall Progress</span>
                    <span className="text-purple-600 font-medium">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => navigate(`/challenges/${challenge.id}/dashboard`)}
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    View Dashboard
                  </button>
                </div>
              </div>
            </div>
          ))}

          {userChallenges.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">You haven't joined any challenges yet.</p>
              <button
                onClick={() => setActiveTab('available')}
                className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
              >
                Browse Available Challenges
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges; 