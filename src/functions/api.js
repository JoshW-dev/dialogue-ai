import axios from 'axios';
const apiKey = process.env.REACT_APP_OPENAI_KEY;

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});

export const generateText = async (prompt) => {
  try {
    const response = await openai.post('/engines/curie/completions', {
      prompt,
      max_tokens: 60
    });
    console.log(response)
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating text: ', error);
  }
};