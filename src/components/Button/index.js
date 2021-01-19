import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext'
import './index.css';

function Button() {
  const place = useContext(PlaceContext);

  let buttonType;
  let buttonText;

  if (place === "register") {
    buttonType = "button__submit button__submit_place_login-register";
    buttonText = "Зарегистрироваться";
  } else if (place === "login") {
    buttonType = "button__submit button__submit_place_login-register";
    buttonText = "Войти";
  }

  return (
    <button
      className={`button ${buttonType}`}
      type={
        place === "register" || "login" || "search"
          ? "submit"
          : "button"
      }
    >
      {buttonText}
    </button>
  );
}

export default Button;