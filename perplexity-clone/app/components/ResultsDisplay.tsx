import React from 'react';

interface ResultsDisplayProps {
  searchResults: any[];
  aiResponse: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ searchResults, aiResponse }) => {
  return (
    <div>
      <h2>AI Response:</h2>
      <p>{aiResponse}</p>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <a href={result.link}>{result.title}</a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDisplay;