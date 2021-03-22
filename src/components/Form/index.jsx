import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlaceContext } from '../../contexts/PlaceContext';
import Button from '../Button';
import './index.css';

function Form({
  formTitle,
  buttonText,
  children,
  onSubmit,
  isDisabled,
  formError,
}) {
  const place = useContext(PlaceContext);

  let formNameType;
  let formFieldsetType;
  let formButtonType;
  let method;
  let errorType;

  if (place === 'login') {
    formNameType = 'form__name_place_login-register';
    formFieldsetType = 'form__fieldset_place_login-register';
    formButtonType = 'form__button_place_login-register';
    method = 'POST';
    errorType = 'form__error_place_login-register';
  } else if (place === 'register') {
    formNameType = 'form__name_place_login-register';
    formFieldsetType = 'form__fieldset_place_login-register';
    formButtonType = 'form__button_place_login-register';
    method = 'POST';
    errorType = 'form__error_place_login-register';
  } else if (place === 'search') {
    formNameType = 'form__name_place_search';
    formFieldsetType = 'form__fieldset_place_search';
    formButtonType = 'form__button_place_search';
    method = 'GET';
    errorType = 'form__error_place_search';
  }

  return (
    <form
      className="form"
      name={`${place}-form`}
      action="#"
      method={method}
      onSubmit={onSubmit}
      noValidate
    >
      <p className={`form__name ${formNameType}`}>
        {formTitle}
      </p>
      <fieldset className={`form__fieldset ${formFieldsetType}`}>
        {children}
        <div className={`form__button ${formButtonType}`}>
          {formError === ''
            ? ''
            : <span className={`form__error ${errorType}`}>{formError}</span>}
          <Button
            buttonText={buttonText}
            isDisabled={isDisabled}
          />
        </div>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  formError: PropTypes.string.isRequired,
};

export default Form;
