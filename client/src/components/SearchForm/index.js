import React from 'react';
import './style.css';


function SearchForm() {
  return (
  <div className="search-form">
    <div className="form-group">
    <label for="search-input">Search</label>
    <input type="email" class="form-control" id="search-input" aria-describedby="search-input"></input>
    </div>
  </div>
  )
}

export default SearchForm;