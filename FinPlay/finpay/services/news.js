const API_KEY = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY;
 // Replace with your actual API key

export const getCryptoNews = async () => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return data.Data.map(article => ({
      id: article.id,
      title: article.title,
      description: article.body,
      image: article.imageurl,
      date: new Date(article.published_on * 1000).toISOString().split('T')[0],
      category: article.categories,
      source: article.source,
      url: article.url
    }));
  } catch (error) {
    console.error('Error fetching crypto news:', error);
    throw error;
  }
};

export const getNewsByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=${category}&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return data.Data.map(article => ({
      id: article.id,
      title: article.title,
      description: article.body,
      image: article.imageurl,
      date: new Date(article.published_on * 1000).toISOString().split('T')[0],
      category: article.categories,
      source: article.source,
      url: article.url
    }));
  } catch (error) {
    console.error('Error fetching news by category:', error);
    throw error;
  }
};
