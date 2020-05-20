import React from 'react';
import './style.css';

function SearchResult() {
  return (
    <div className="search-result">
      <button type="button" class="float-right btn btn-primary">View</button>
      <button type="button" class="float-right btn btn-outline-primary mr-2">Save</button>
      <h4>Title</h4>
      <h5>Author</h5>
      <div className="mt-4 mb-2">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300x200" className="card-img" alt="alt" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;