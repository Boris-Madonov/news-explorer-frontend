import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function PopupLink({
  onClick,
}) {
  const place = useContext(PlaceContext);

  let popupType;
  let text;
  let buttonText;
  let buttonType;

  if (place === "register") {
    popupType = "popup-link_place_login-register";
    text = "или";
    buttonText = "Войти";
    buttonType = "popup-link__button_place_login-register";
  } else if (place === "login") {
    popupType = "popup-link_place_login-register";
    text = "или";
    buttonText = "Зарегистрироваться";
    buttonType = "popup-link__button_place_login-register";
  } else if (place === "infoTooltip") {
    popupType = "popup-link_place_info-tooltip";
    text = "";
    buttonText = "Войти";
    buttonType = "popup-link__button_place_info-tooltip";
  }

  return (
    <div
      className={`popup-link ${popupType}`}
    >
      <p className="popup-link__text">
        {text}&nbsp;
      </p>
      <button
        className={`popup-link__button ${buttonType}`}
        type="button"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PopupLink;