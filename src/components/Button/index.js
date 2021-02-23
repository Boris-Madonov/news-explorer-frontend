import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext'
import { PageContext } from '../../contexts/PageContext';
import './index.css';

function Button({
  buttonText,
}) {
  const place = useContext(PlaceContext);
  const page = useContext(PageContext);

  const buttonPageType = page === "savedNews"
    ? "button__header_saved-news"
    : "";

  let buttonType;
  let type;

  if (place === "login") {
    buttonType = "button__submit button__submit_place_login-register";
    type = "submit"
  } else if (place === "register") {
    buttonType = "button__submit button__submit_place_login-register";
    type = "submit"
  } else if (place === "header") {
    buttonType = "button__header";
    type = "button"
  } else if (place === "search") {
    buttonType = "button__submit button__submit_place_search";
    type = "submit"
  } else if (place === "cards-list") {
    buttonType = "button__cards-list";
    type = "button"
  }

  return (
    <button
      className={`button ${buttonPageType} ${buttonType}`}
      type={type}
    >
      {buttonText}
    </button>
  );
}

export default Button;