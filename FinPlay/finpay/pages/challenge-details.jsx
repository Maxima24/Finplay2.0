import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const challenges = [
  {
    id: 1,
    title: 'Beginner Trading Challenge',
    description: 'Start your trading journey with this beginner-friendly challenge. Perfect for those who want to test their skills in a risk-free environment while competing for real prizes.',
    prize: '$500',
    participants: 245,
    duration: '7 days',
    difficulty: 'Beginner',
    status: 'active',
    startDate: '2024-03-20',
    endDate: '2024-03-27',
    requirements: [
      'Complete basic trading course',
      'Minimum account balance: $100',
      'Maximum 3 trades per day'
    ],
    rules: [
      'Trading is only allowed during market hours (9:30 AM - 4:00 PM EST)',
      'Each trade must be held for a minimum of 5 minutes',
      'Maximum position size is 20% of your account balance',
      'No short selling allowed',
      'Must maintain a minimum account balance of $100 throughout the challenge'
    ],
    prizes: [
      {
        rank: 1,
        amount: '$250',
        description: 'First Place'
      },
      {
        rank: 2,
        amount: '$150',
        description: 'Second Place'
      },
      {
        rank: 3,
        amount: '$100',
        description: 'Third Place'
      }
    ],
    leaderboard: [
      {
        rank: 1,
        name: 'John Smith',
        profit: '+$320',
        trades: 15,
        winRate: '73%'
      },
      {
        rank: 2,
        name: 'Sarah Johnson',
        profit: '+$280',
        trades: 18,
        winRate: '67%'
      },
      {
        rank: 3,
        name: 'Mike Brown',
        profit: '+$250',
        trades: 12,
        winRate: '75%'
      }
    ]
  },
  {
    id: 2,
    title: 'Technical Analysis Master',
    description: 'Test your technical analysis skills in this intermediate challenge. Perfect for traders who want to refine their technical analysis abilities and compete for bigger prizes.',
    prize: '$1,000',
    participants: 180,
    duration: '14 days',
    difficulty: 'Intermediate',
    status: 'upcoming',
    startDate: '2024-03-25',
    endDate: '2024-04-08',
    requirements: [
      'Complete technical analysis course',
      'Minimum account balance: $500',
      'Maximum 5 trades per day'
    ],
    rules: [
      'Trading is only allowed during market hours (9:30 AM - 4:00 PM EST)',
      'Each trade must be held for a minimum of 10 minutes',
      'Maximum position size is 30% of your account balance',
      'Short selling is allowed',
      'Must maintain a minimum account balance of $500 throughout the challenge'
    ],
    prizes: [
      {
        rank: 1,
        amount: '$500',
        description: 'First Place'
      },
      {
        rank: 2,
        amount: '$300',
        description: 'Second Place'
      },
      {
        rank: 3,
        amount: '$200',
        description: 'Third Place'
      }
    ],
    leaderboard: []
  },
  {
    id: 3,
    title: 'Advanced Trading Championship',
    description: 'The ultimate trading challenge for experienced traders. Compete with the best and win big prizes.',
    prize: '$5,000',
    participants: 89,
    duration: '30 days',
    difficulty: 'Advanced',
    status: 'upcoming',
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    requirements: [
      'Complete all advanced courses',
      'Minimum account balance: $1,000',
      'No trade limit'
    ],
    rules: [
      'Trading is allowed 24/7',
      'No minimum holding time for trades',
      'Maximum position size is 50% of your account balance',
      'All trading strategies allowed',
      'Must maintain a minimum account balance of $1,000 throughout the challenge'
    ],
    prizes: [
      {
        rank: 1,
        amount: '$2,500',
        description: 'First Place'
      },
      {
        rank: 2,
        amount: '$1,500',
        description: 'Second Place'
      },
      {
        rank: 3,
        amount: '$1,000',
        description: 'Third Place'
      }
    ],
    leaderboard: []
  }
];

const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const challenge = challenges.find(c => c.id === parseInt(id));

  if (!challenge) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge Not Found</h2>
          <p className="text-gray-600 mb-6">The challenge you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/challenges')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Challenges
          </button>
        </div>
      </div>
    );
  }

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
        <button
          onClick={() => navigate('/challenges')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Challenges
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg text-gray-600">Challenge Details</h3>
            <h2 className="text-2xl font-bold text-gray-900">{challenge.title}</h2>
          </div>
          <div className="flex items-center space-x-4">
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
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`${
              activeTab === 'overview'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`${
              activeTab === 'rules'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Rules & Requirements
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`${
              activeTab === 'leaderboard'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Leaderboard
          </button>
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenge Description</h3>
            <p className="text-gray-600">{challenge.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Prize Pool</h4>
              <p className="text-2xl font-semibold text-gray-900">{challenge.prize}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Duration</h4>
              <p className="text-2xl font-semibold text-gray-900">{challenge.duration}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Participants</h4>
              <p className="text-2xl font-semibold text-gray-900">{challenge.participants}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Start Date</h4>
              <p className="text-2xl font-semibold text-gray-900">{formatDate(challenge.startDate)}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prize Distribution</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenge.prizes.map((prize) => (
                <div key={prize.rank} className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">{prize.description}</div>
                  <div className="text-2xl font-semibold text-purple-600">{prize.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Rules Tab */}
      {activeTab === 'rules' && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-3">
              {challenge.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trading Rules</h3>
            <ul className="space-y-3">
              {challenge.rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-600">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Rankings</h3>
            {challenge.leaderboard.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trader</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trades</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {challenge.leaderboard.map((trader) => (
                      <tr key={trader.rank}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            trader.rank === 1
                              ? 'bg-yellow-100 text-yellow-800'
                              : trader.rank === 2
                              ? 'bg-gray-100 text-gray-800'
                              : trader.rank === 3
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-gray-50 text-gray-800'
                          }`}>
                            #{trader.rank}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {trader.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                          {trader.profit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trader.trades}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trader.winRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Leaderboard will be available when the challenge starts.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Join Challenge Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate(`/challenges/${id}/join`)}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
        >
          Join Challenge
        </button>
      </div>
    </div>
  );
};

export default ChallengeDetails; 