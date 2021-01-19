import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext';
import Button from '../Button';
import './index.css';

function Form({
  formTitle,
  children,
}) {
  const place = useContext(PlaceContext);

  let formNameType;
  let formFieldsetType;

  if (place === "login" || "register") {
    formNameType = "form__name_place_login-register";
    formFieldsetType = "form__fieldset_place_login-register";
  }

  return(
    <form
      className="form"
      name={`${place}-form`}
      action="#"
      method={
        place === "register" || "login"
          ? "POST"
          : "GET"
      }
      onSubmit=""
      noValidate
    >
      <p className={`form__name ${formNameType}`}>
        {formTitle}
      </p>
      <fieldset className={`form__fieldset ${formFieldsetType}`}>
        {children}
        <Button />
      </fieldset>
    </form>
  );
}

export default Form