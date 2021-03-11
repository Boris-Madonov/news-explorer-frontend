import React from 'react';
import Form from '../Form';
import FormInput from "../FormInput";
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function SearchForm() {
  return (
    <PlaceContext.Provider value="search">
      <section className="search-form">
        <h1 className="search-form__title">
          Что творится в мире?
        </h1>
        <Form
          formTitle="Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете."
          buttonText="Искать"
        >
          <FormInput
            inputName="SearchNews"
            type="text"
            name="SearchNews"
            placeholder="Введите тему новости"
            value=""
            onChange=""
            minLength="1"
            maxLength=""
          />
        </Form>
      </section>
    </PlaceContext.Provider>
  );
}

export default SearchForm;