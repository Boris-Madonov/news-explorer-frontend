import React from 'react';
import FormFieldset from '../FormFieldset';
import Header from '../Header';
import './index.css';

function SearchForm() {
  return (
    <section className="search-form">
      <Header />
      <h1 className="search-form__title">
        Что творится в мире?
      </h1>
      <FormFieldset>
        
      </FormFieldset>
    </section>
  );
}

export default SearchForm;