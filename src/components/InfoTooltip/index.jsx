import React from 'react';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function InfoTooltip({
  isOpen,
  onClose,
  onLoginPopup,
}) {
  return (
    <PlaceContext.Provider value="infoTooltip">
      <Popup
        name="infoTooltip"
        isOpen={isOpen}
        onClose={onClose}
      >
        <p className="infoTooltip__text">
          Пользователь успешно зарегистрирован!
        </p>
        <PopupLink
          onClick={onLoginPopup}
        />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default InfoTooltip;
