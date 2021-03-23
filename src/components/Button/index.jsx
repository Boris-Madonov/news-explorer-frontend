import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext';
import { PageContext } from '../../contexts/PageContext';
import './index.css';

function Button({
  buttonText,
  onClick,
  isDisabled,
}) {
  const place = useContext(PlaceContext);
  const page = useContext(PageContext);

  const buttonPageType = page === 'savedNews'
    ? 'button__header_saved-news'
    : '';

  let buttonType;
  let buttonDisabled;

  if (place === 'login') {
    buttonType = 'button__submit';
    buttonDisabled = isDisabled
      ? 'button__submit_disabled'
      : '';
  } else if (place === 'register') {
    buttonType = 'button__submit';
    buttonDisabled = isDisabled
      ? 'button__submit_disabled'
      : '';
  } else if (place === 'header') {
    buttonType = 'button__header';
  } else if (place === 'search') {
    buttonType = 'button__submit';
  } else if (place === 'cards-list') {
    buttonType = 'button__cards-list';
  }

  return (
    <button
      className={`button ${buttonPageType} ${buttonType} ${buttonDisabled}`}
      type={
        place === 'login' || place === 'register' || place === 'search'
          ? 'submit'
          : 'button'
      }
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
