const API_KEY = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY;

export const getCryptoPrice = async (symbol) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch price data');
    }

    const data = await response.json();
    return data.USD;
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    throw error;
  }
};

export const getCryptoPrices = async (symbols) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols.join(',')}&tsyms=USD&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch prices data');
    }

    const data = await response.json();
    return data.RAW;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};

export const getCryptoHistory = async (symbol, limit = 24) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=${limit}&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch historical data');
    }

    const data = await response.json();
    return data.Data.Data.map(item => ({
      time: item.time,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
      volume: item.volumeto
    }));
  } catch (error) {
    console.error('Error fetching crypto history:', error);
    throw error;
  }
};

export const getTopCryptos = async (limit = 10) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch top cryptocurrencies');
    }

    const data = await response.json();
    return data.Data.map(crypto => ({
      symbol: crypto.CoinInfo.Name,
      name: crypto.CoinInfo.FullName,
      price: crypto.RAW.USD.PRICE,
      change24h: crypto.RAW.USD.CHANGEPCT24HOUR,
      marketCap: crypto.RAW.USD.MKTCAP,
      volume24h: crypto.RAW.USD.VOLUME24HOUR
    }));
  } catch (error) {
    console.error('Error fetching top cryptocurrencies:', error);
    throw error;
  }
};

// Mock trading functions for demo purposes
export const executeTrade = async (orderData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    orderId: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    ...orderData
  };
};

export const getPortfolio = async () => {
  return {
    totalValue: 12500.00,
    dailyChange: 2.45,
    assets: [
      { symbol: 'BTC', amount: 0.5, value: 8500, change: 3.2 },
      { symbol: 'ETH', amount: 8.2, value: 3200, change: -1.1 },
      { symbol: 'ADA', amount: 5000, value: 800, change: 5.7 }
    ]
  };
};

export const getRecentTrades = async () => {
  // Mock recent trades data
  return [
    { time: '14:32', pair: 'BTC/USD', type: 'buy', amount: 0.05, price: 17000 },
    { time: '14:28', pair: 'ETH/USD', type: 'sell', amount: 2.1, price: 390 },
    { time: '14:25', pair: 'ADA/USD', type: 'buy', amount: 1000, price: 0.16 },
    { time: '14:20', pair: 'SOL/USD', type: 'sell', amount: 5.5, price: 95 }
  ];
};

