import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext'
import { PageContext } from '../../contexts/PageContext';
import './index.css';

function Button({
  buttonText,
  onClick,
  isDisabled,
}) {
  const place = useContext(PlaceContext);
  const page = useContext(PageContext);

  const buttonPageType = page === "savedNews"
    ? "button__header_saved-news"
    : "";

  let buttonType;
  let type;
  let buttonDisabled;

  if (place === "login") {
    buttonType = "button__submit";
    type = "submit"
    buttonDisabled = isDisabled
      ? "button__submit_disabled"
      : "";
  } else if (place === "register") {
    buttonType = "button__submit";
    type = "submit"
    buttonDisabled = isDisabled
      ? "button__submit_disabled"
      : "";
  } else if (place === "header") {
    buttonType = "button__header";
    type = "button"
  } else if (place === "search") {
    buttonType = "button__submit";
    type = "submit"
  } else if (place === "cards-list") {
    buttonType = "button__cards-list";
    type = "button"
  }

  return (
    <button
      className={`button ${buttonPageType} ${buttonType} ${buttonDisabled}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;