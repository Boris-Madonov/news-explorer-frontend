import React, { useState } from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';

function LoginPopup({
  isOpen,
  onClose,
  onRegisterPopup,
  onLogin,
}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!userEmail || !userPassword) {
      return;
    }

    onLogin(userEmail, userPassword);
    setUserEmail('');
    setUserPassword('');
  };

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
          onSubmit={handleSubmit}
        >
          <FormInput
            inputName="Email"
            type="email"
            name="email"
            placeholder="Введите почту"
            value={userEmail || ''}
            onChange={handleChangeEmail}
            minLength="1"
            maxLength="40"
          />
          <FormInput
            inputName="Пароль"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={userPassword || ''}
            onChange={handleChangePassword}
            minLength="1"
            maxLength="40"
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