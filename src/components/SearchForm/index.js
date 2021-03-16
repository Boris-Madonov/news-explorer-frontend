import React, { useEffect } from 'react';
import Form from '../Form';
import FormInput from "../FormInput";
import { PlaceContext } from '../../contexts/PlaceContext';
import useForm from '../../hooks/useForm';
import './index.css';

function SearchForm({
  onSearch,
  setFormError,
  formError,
}) {
  const {
    handleChangeInput,
    handleSubmit,
    values,
    setValidationError,
    setValues,
    setIsValid,
    isValid,
    isFormValid
  } = useForm(submitForm);

  useEffect(() => {
    setValidationError({
      searchNews: "",
    });
    setValues({
      searchNews: "",
    });
    setIsValid({
      searchNews: false,
    });
    setFormError('');
  }, [setValidationError, setValues, setIsValid, setFormError]);

  function submitForm(e) {
    const { email, password } = values;
    onSearch(email, password);
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
          isDisabled={!isFormValid}
          formError={formError}
        >
          <FormInput
            inputName="searchNews"
            type="text"
            name="searchNews"
            placeholder="Введите тему новости"
            value={String(values.searchNews)}
            onChange={handleChangeInput}
            isValid={isValid.searchNews}
            error=""
            minLength="1"
            maxLength="50"
          />
        </Form>
      </section>
    </PlaceContext.Provider>
  );
}

export default SearchForm;