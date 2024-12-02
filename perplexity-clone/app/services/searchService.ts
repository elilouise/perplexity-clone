import axios from 'axios';

const SERPAPI_KEY = process.env.SERPAPI_KEY;

export const searchWeb = async (query: string) => {
  if (!SERPAPI_KEY) {
    throw new Error('SERPAPI_KEY environment variable is not set');
  }

  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${SERPAPI_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data.organic_results;
  } catch (error: unknown) {
    if (axios.isAxiosError !== undefined && axios.isAxiosError(error)) {
      const axiosError = error as any;
      console.error('Axios error:', axiosError.message);
      console.error('Axios error response data:', axiosError.response?.data);
      throw new Error(`Failed to retrieve search results: ${axiosError.message}`);
    } else {
      console.error('Unknown error:', error);
      throw error;
    }
  }
};