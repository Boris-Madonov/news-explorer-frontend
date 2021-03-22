import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function FormInput({
  inputName,
  type,
  name,
  placeholder,
  value,
  onChange,
  isValid,
  error,
  minLength,
  maxLength,
}) {
  const place = useContext(PlaceContext);

  let inputFieldType;
  let inputNameType;
  let inputNameText;

  if (place === 'login') {
    inputFieldType = 'input__field_place_login-register';
    inputNameType = 'input__name_place_login-register';
    inputNameText = inputName;
  } else if (place === 'register') {
    inputFieldType = 'input__field_place_login-register';
    inputNameType = 'input__name_place_login-register';
    inputNameText = inputName;
  } else if (place === 'search') {
    inputFieldType = 'input__field_place_search';
    inputNameType = 'input__name_place_search';
    inputNameText = '';
  }

  return (
    <label
      className={`input__name ${inputNameType}`}
      htmlFor={`${place}-input-${name}`}
    >
      {inputNameText}
      <input
        className={`input__field ${inputFieldType}`}
        id={`${place}-input-${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span
        className={`input__field-error ${isValid && 'input__field-error_hide'}`}
        id={`${place}-input-${name}-error`}
      >
        {error}
      </span>
    </label>
  );
}

export default FormInput;
