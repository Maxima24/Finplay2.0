import React, { useState, useEffect } from 'react';
import { getTopCryptos, executeTrade, getPortfolio } from '../services/trading';

const Trading = () => {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');
  const [orderType, setOrderType] = useState('market');
  const [orderSide, setOrderSide] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState({
    totalValue: 12500.00,
    dailyChange: 2.45,
    assets: []
  });
  const [tradingPairs, setTradingPairs] = useState([]);
  const [recentTrades, setRecentTrades] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [cryptoData, portfolioData] = await Promise.all([
        getTopCryptos(5),
        getPortfolio()
      ]);

      const pairs = cryptoData.map(crypto => ({
        symbol: `${crypto.symbol}/USD`,
        price: crypto.price,
        change: crypto.change24h,
        name: crypto.name
      }));

      setTradingPairs(pairs);
      setPortfolio(portfolioData);
      
      // Mock recent trades
      setRecentTrades([
        { time: '14:32', pair: 'BTC/USD', type: 'buy', amount: 0.05, price: 17000 },
        { time: '14:28', pair: 'ETH/USD', type: 'sell', amount: 2.1, price: 390 },
        { time: '14:25', pair: 'ADA/USD', type: 'buy', amount: 1000, price: 0.16 },
        { time: '14:20', pair: 'SOL/USD', type: 'sell', amount: 5.5, price: 95 }
      ]);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTrade = async (e) => {
    e.preventDefault();
    
    if (!amount || (orderType === 'limit' && !price)) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const tradeData = {
        orderType,
        orderSide,
        amount: parseFloat(amount),
        price: orderType === 'limit' ? parseFloat(price) : null,
        pair: selectedPair,
        timestamp: new Date().toISOString()
      };

      const result = await executeTrade(tradeData);
      
      if (result.success) {
        alert(`Trade executed successfully! Order ID: ${result.orderId}`);
        setAmount('');
        setPrice('');
        
        // Add to recent trades
        const newTrade = {
          time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          pair: selectedPair,
          type: orderSide,
          amount: parseFloat(amount),
          price: orderType === 'limit' ? parseFloat(price) : tradingPairs.find(p => p.symbol === selectedPair)?.price
        };
        
        setRecentTrades(prev => [newTrade, ...prev.slice(0, 3)]);
      }
    } catch (error) {
      console.error('Trade execution error:', error);
      alert('Failed to execute trade. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const selectedPairData = tradingPairs.find(pair => pair.symbol === selectedPair);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Trading</h1>
          <p className="text-gray-600 mt-2">Buy and sell cryptocurrencies with real-time market data</p>
        </div>

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <span>Loading...</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Trading Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Price Chart</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-md">1H</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">4H</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">1D</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">1W</button>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Interactive Chart</p>
                  <p className="text-sm text-gray-500">Real-time price data visualization</p>
                </div>
              </div>
            </div>

            {/* Trading Pairs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Trading Pairs</h2>
              <div className="space-y-3">
                {tradingPairs.map((pair) => (
                  <div
                    key={pair.symbol}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedPair === pair.symbol ? 'bg-purple-50 border border-purple-200' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedPair(pair.symbol)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-purple-600">
                          {pair.symbol.split('/')[0].charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{pair.symbol}</p>
                        <p className="text-sm text-gray-500">${pair.price?.toLocaleString() || 'Loading...'}</p>
                      </div>
                    </div>
                    <div className={`text-right ${pair.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      <p className="font-medium">{pair.change >= 0 ? '+' : ''}{pair.change?.toFixed(2) || '0.00'}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="space-y-6">
            {/* Portfolio Overview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">${portfolio.totalValue.toLocaleString()}</p>
                  <p className={`text-sm ${portfolio.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolio.dailyChange >= 0 ? '+' : ''}{portfolio.dailyChange}% today
                  </p>
                </div>
                
                <div className="space-y-3">
                  {portfolio.assets.map((asset) => (
                    <div key={asset.symbol} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-purple-600">{asset.symbol.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{asset.symbol}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">${asset.value.toLocaleString()}</p>
                        <p className={`text-xs ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {asset.change >= 0 ? '+' : ''}{asset.change}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trading Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Place Order</h2>
              
              <form onSubmit={handleTrade} className="space-y-4">
                {/* Order Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                        orderType === 'market'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setOrderType('market')}
                    >
                      Market
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                        orderType === 'limit'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setOrderType('limit')}
                    >
                      Limit
                    </button>
                  </div>
                </div>

                {/* Buy/Sell Toggle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Side</label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                        orderSide === 'buy'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setOrderSide('buy')}
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                        orderSide === 'sell'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setOrderSide('sell')}
                    >
                      Sell
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>

                {/* Price (for limit orders) */}
                {orderType === 'limit' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                )}

                {/* Selected Pair Info */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Trading Pair:</span>
                    <span className="font-medium text-gray-900">{selectedPair}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-600">Current Price:</span>
                    <span className="font-medium text-gray-900">
                      ${selectedPairData?.price?.toLocaleString() || 'Loading...'}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 text-sm font-medium text-white rounded-md transition-colors ${
                    orderSide === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Processing...' : `${orderSide === 'buy' ? 'Buy' : 'Sell'} ${selectedPair.split('/')[0]}`}
                </button>
              </form>
            </div>

            {/* Recent Trades */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Trades</h2>
              <div className="space-y-3">
                {recentTrades.map((trade, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${trade.type === 'buy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-gray-600">{trade.time}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{trade.pair}</p>
                      <p className="text-gray-500">{trade.amount} @ ${trade.price?.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;