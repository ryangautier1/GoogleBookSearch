import React from 'react';
import { Link } from "react-router-dom";
import SearchForm from '../components/SearchForm';
import ResultsWrapper from '../components/ResultWrapper';


function Search() {
  return (
    <div>
    <SearchForm/>
    <ResultsWrapper/>
    </div>
  )
}

export default Search;