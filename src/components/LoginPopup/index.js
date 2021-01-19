import React from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import './index.css';

function LoginPopup({
  isOpen,
}) {
  return (
    <Popup
    name="login"
    isOpen={isOpen}
    >
      <Form
        formTitle="Вход"
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
        textLink="или"
        nameLink="Зарегистрироваться"
      />
    </Popup>
  );
}

export default LoginPopup;