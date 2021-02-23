import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext';
import PageLink from '../PageLink';
import './index.css';

function PopupLink() {
  const place = useContext(PlaceContext);

  let popupType;
  let text;
  let linkTo;
  let linkText;
  let linkPlace;

  if (place === "register") {
    popupType = "popup-link_place_login-register";
    text = "или";
    linkTo = "/signin";
    linkText = "Войти";
    linkPlace = "popupLoginRegister";
  } else if (place === "login") {
    popupType = "popup-link_place_login-register";
    text = "или";
    linkTo = "/signup";
    linkText = "Зарегистрироваться";
    linkPlace = "popupLoginRegister";
  } else if (place === "infoTooltip") {
    popupType = "popup-link_place_info-tooltip";
    text = "";
    linkTo = "/signin";
    linkText = "Войти";
    linkPlace = "popupInfoTooltip";
  }

  return (
    <div
      className={`popup-link ${popupType}`}
    >
      <p className="popup-link__text">
        {text}&nbsp;
      </p>
      <PageLink
        linkTo={linkTo}
        linkText={linkText}
        linkPlace={linkPlace}
        activeClassName={false}
      />
    </div>
  );
}

export default PopupLink;