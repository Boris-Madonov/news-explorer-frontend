import React from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';

function LoginPopup({
  isOpen,
  onClose,
  onRegisterPopup,
}) {
  return (
    <PlaceContext.Provider value="login">
      <Popup
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      >
        <Form
          formTitle="Вход"
          buttonText="Войти"
        >
          <FormInput
            inputName="Email"
            type="email"
            name="email"
            placeholder="Введите почту"
            value=""
            onChange=""
            minLength="1"
            maxLength=""
          />
          <FormInput
            inputName="Пароль"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value=""
            onChange=""
            minLength="1"
            maxLength=""
          />
        </Form>
        <PopupLink
          onClick={onRegisterPopup}
        />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default LoginPopup;