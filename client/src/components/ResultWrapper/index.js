import React from 'react';
import './style.css';
import SearchResult from '../SearchResult';

function ResultsWrapper(props) {
  console.log(props);
  return (
    <div className="results-wrapper">
      <h3>Results</h3>
      {props.books.map(item => {return(
        <SearchResult {...item} />
      )})}
    </div>
  )
}

export default ResultsWrapper;