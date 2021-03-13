import React, { useState } from 'react';
import Form from '../Form';
import FormInput from "../FormInput";
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function SearchForm() {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!searchText) {
      return;
    }

    handleChangeSearch('');
  };

  return (
    <PlaceContext.Provider value="search">
      <section className="search-form">
        <h1 className="search-form__title">
          Что творится в мире?
        </h1>
        <Form
          formTitle="Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете."
          buttonText="Искать"
          onSubmit={handleSubmit}
        >
          <FormInput
            inputName="SearchNews"
            type="text"
            name="SearchNews"
            placeholder="Введите тему новости"
            value={searchText || ''}
            onChange={handleChangeSearch}
            minLength="1"
            maxLength="50"
          />
        </Form>
      </section>
    </PlaceContext.Provider>
  );
}

export default SearchForm;