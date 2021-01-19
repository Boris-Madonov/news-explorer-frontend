import React from 'react';
import './index.css';

function PopupLink({
  textLink,
  nameLink,
}) {
  return (
    <div className="popup-link">
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