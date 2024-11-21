import React, { useContext } from 'react';
import Footer from '../components/Footer';
import '../styles/SearchResults.css';
import { ResultsContext } from '../context/ResultsContext';

const ResultsPage = () => {
  const { results } = useContext(ResultsContext);

  if (!results) {
    return <div></div>;
  }

  const formatText = (text) => {
    const sections = text.split('\n'); // Split text into sections

    return sections.map((section, index) => {
      if (section.startsWith('Ingredients') || section.startsWith('Instructions')) {
        return <pre key={index}>{section}</pre>;
      } else if (section.match(/^\d+\./)) { // If the section starts with a number (e.g., "1.")
        return <p key={index} className='ingre'>{section}</p>;
      } else if (index === 0) {
        return <h1 key={index}>{section}</h1>;
      } else {
        return <p key={index}>{section}</p>;
      }
    });
  };

  return (
    <>
      <div className="results-page">
        <div className="image-gallery">
          {results.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Generated Dish ${index + 1}`}
              className={index < 2 ? 'recipe-image-large' : 'recipe-image-small'} 
            />
          ))}
        </div>
        
        <div className="formatted-text">
          {formatText(results.text)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultsPage;
