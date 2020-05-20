import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchForm from '../components/SearchForm';


function Search() {
  return (
    <SearchForm/>
  )
}

export default Search;