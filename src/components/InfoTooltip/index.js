import React from 'react';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import './index.css';

function InfoTooltip({
  isOpen,
}) {
  return (
    <Popup
      name="infoTooltip"
      isOpen={isOpen}
    >
      <p className="infoTooltip__text">
        Пользователь успешно зарегистрирован!
      </p>
      <PopupLink
        textLink=""
        nameLink="Войти"
      />
    </Popup>
  );
}

export default InfoTooltip;