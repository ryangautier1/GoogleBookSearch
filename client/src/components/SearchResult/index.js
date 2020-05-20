import React from 'react';
import './style.css';

function SearchResult(props) {
  return (
    <div className="search-result">
      <button type="button" className="float-right btn btn-primary">View</button>
      <button type="button" className="float-right btn btn-info mr-2">Save</button>
      <h4>{props.title}</h4>
      <h5>{props.author}</h5>
      <div className="mt-4 mb-2">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.image} className="card-img" alt={props.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">{props.info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;