import React from 'react';
import './style.css';


function SearchForm() {
  return (
    <div className="search-form">
      <h3>Book Search</h3>
      <form>
        <div className="form-group">
          <label for="search-input">Book</label>
          <input type="email" class="form-control" id="search-input" aria-describedby="search-input"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm;