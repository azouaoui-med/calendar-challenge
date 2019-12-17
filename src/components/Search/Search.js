import React from 'react';
import Form from 'react-bootstrap/Form';
import search from '../../assets/svg/search-icon.svg';

const Search = () => {
  return (
    <div className="calendar-search">
      <div className="search-wrapper">
        <Form.Control
          data-testid="search-input"
          type="text"
          placeholder="What are you looking for?"
        />
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

export default Search;
