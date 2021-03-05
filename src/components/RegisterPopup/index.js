import React from 'react';
import Popup from '../Popup';
import FormInput from '../FormInput';
import Form from '../Form';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';

function RegisterPopup({
  isOpen,
  onClose,
  onLoginPopup,
}) {
  return (
    <PlaceContext.Provider value="register">
      <Popup
        name="register"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Form
          formTitle="Регистрация"
          buttonText="Зарегистрироваться"
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
          <FormInput
            inputName="Имя"
            type="text"
            name="name"
            placeholder="Введите своё имя"
            value=""
            onChange=""
            minLength="2"
            maxLength="30"
          />
        </Form>
        <PopupLink
          onClick={onLoginPopup}
        />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default RegisterPopup;