import React from 'react';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';
import './index.css';

function InfoTooltip({
  isOpen,
}) {
  return (
    <PlaceContext.Provider value="infoTooltip">
      <Popup
        name="infoTooltip"
        isOpen={isOpen}
      >
        <p className="infoTooltip__text">
          Пользователь успешно зарегистрирован!
        </p>
        <PopupLink />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default InfoTooltip;