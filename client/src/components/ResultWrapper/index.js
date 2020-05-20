import React from 'react';
import './style.css';
import SearchResult from '../SearchResult';



function ResultsWrapper() {
  return (
    <div className="results-wrapper">
      <h3>Results</h3>
      <SearchResult />
    </div>
  )
}

export default ResultsWrapper;