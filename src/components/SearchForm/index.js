import React from 'react';
import Header from '../Header';
import './index.css';

function SearchForm() {
  return (
    <section className="search-form">
      <Header />
      <h1 className="search-form__title">
        Что творится в мире?
      </h1>
    </section>
  );
}

export default SearchForm;