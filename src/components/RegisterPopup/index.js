import React from 'react';
import Popup from '../Popup';
import FormInput from '../FormInput';
import './index.css';
import Form from '../Form';
import PopupLink from '../PopupLink';

function RegisterPopup(
  isOpen,
) {
  return (
    <Popup
      name="register"
      isOpen={isOpen}
    >
      <Form
        formName="form-test"
        formTitle="Регистрация"
        formFieldset="fieldset-test"
        place="register"
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
        textLink="или"
        nameLink="Войти"
      />
    </Popup>
  );
}

export default RegisterPopup;