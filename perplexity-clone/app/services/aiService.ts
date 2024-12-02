import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAIResponse = async (query: string, searchResults: any[]) => {
  const prompt = `Query: ${query}\n\nSearch Results:\n${JSON.stringify(searchResults, null, 2)}\n\nPlease provide a comprehensive answer to the query based on the search results, including citations.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt },
      ],
      max_tokens: 500,
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};