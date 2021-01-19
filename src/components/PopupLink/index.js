import React, { useContext } from 'react';
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function PopupLink({
  textLink,
  nameLink,
}) {
  const place = useContext(PlaceContext);

  return (
    <div
      className={`popup-link ${
        place === "infoTooltip"
          ? "popup-link_place_info-tooltip"
          : "popup-link_place_login-register"
      }`}
    >
      <p className="popup-link__text">
        {textLink}&nbsp;
      </p>
      <p
        className="popup-link__name"
        onClick=""
      >
        {nameLink}
      </p>
    </div>
  );
}

export default PopupLink;