import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext'
import './index.css';

function FormInput({
  inputName,
  type,
  name,
  placeholder,
  value,
  onChange,
  minLength,
  maxLength,
  }) {
  const place = useContext(PlaceContext);

  let inputFieldType;
  let inputNameType;
  let inputNameText;
  let errorType;

  if (place === "login") {
    inputFieldType = "input__field_place_login-register";
    inputNameType = "input__name_place_login-register";
    inputNameText = inputName;
    errorType = "";
  } else if (place === "register") {
    inputFieldType ="input__field_place_login-register";
    inputNameType = "input__name_place_login-register";
    inputNameText = inputName;
    errorType = "";
  } else if (place === "search") {
    inputFieldType = "input__field_place_search";
    inputNameType = "input__name_place_search";
    inputNameText = "";
    errorType = "input__field-error_hide";
  }

  return(
    <label className={`input__name ${inputNameType}`}>
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
        className={`input__field-error ${errorType}`}
        id={`${place}-input-${name}-error`}
      >
        Ошибка валидации
      </span>
    </label>
  );
}

export default FormInput