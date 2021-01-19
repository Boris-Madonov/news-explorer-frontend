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

  const inputFieldType = place === "login" || "register"
    ? "input__field_place_login-register"
    : "input__field_place_search";

  return(
    <label className="input__name">
      {inputName}
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
        className="input__field-error"
        id={`${place}-input-${name}-error`}
      >
        Не правильный формат Email
      </span>
    </label>
  );
}

export default FormInput