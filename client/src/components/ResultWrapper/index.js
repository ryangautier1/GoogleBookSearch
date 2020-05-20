import React from 'react';
import './style.css';
import SearchResult from '../SearchResult';

const results = [
  {
    key: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://via.placeholder.com/300x200",
    info: "Harry Potter is a wizard and he does some stuff."
  },
  {
    key: 2,
    title: "Harry Potter 2",
    author: "J.K. Rowling",
    image: "https://via.placeholder.com/300x200",
    info: "Harry Potter is a wizard and he does some more stuff."
  }
]


function ResultsWrapper() {
  return (
    <div className="results-wrapper">
      <h3>Results</h3>
      {results.map(item => {return(
        <SearchResult {...item} />
      )})}
    </div>
  )
}

export default ResultsWrapper;