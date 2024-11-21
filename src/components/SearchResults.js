import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/SearchResults.css';

const SearchBox = ({ query, setQuery, loading, setLoading, error, setError, handleSearchComplete }) => {
  const handleAdvancedSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const recipePrompt = `Generate a detailed recipe for ${query}. The recipe should include a list of ingredients, step-by-step cooking instructions, and any tips or variations to enhance the dish. Additionally, provide a detailed nutritional breakdown, including calories, proteins, fats, carbohydrates, and any vitamins or minerals for a typical serving.`;

      const imagePrompt = `Create an image that visually represents a delicious dish of ${query}. The image should be appealing, accurate, and visually reflective of the dish description.`;

      // Using Promise.all to handle both requests concurrently
      const [recipeData, imageData] = await Promise.all([
        axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: "You are a helpful assistant that generates recipes and provides nutritional information."
            },
            {
              role: 'user',
              content: recipePrompt,
            }
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          }
        }),

        axios.post('https://api.openai.com/v1/images/generations', {
          prompt: imagePrompt,
          n: 2, // Adjust n for multiple images
          size: '256x256',
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          }
        })
      ]);

      const generatedRecipeText = recipeData.data.choices[0].message.content;
      const generatedImageUrls = imageData.data.data.map(image => image.url);

      const results = { text: generatedRecipeText, images: generatedImageUrls };

      handleSearchComplete(results);

    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
      setError('An error occurred while fetching the recipe or generating the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='search-box'>
      <input
        type='text'
        className='search-box-1'
        placeholder='Ask SuperQuick AI or Search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdvancedSearch()} 
      />
      <Link to={`/results`}>
        <button onClick={handleAdvancedSearch} disabled={loading}>
          <img src='../assets/Ai.svg' alt='ai' />
        </button>
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBox;
